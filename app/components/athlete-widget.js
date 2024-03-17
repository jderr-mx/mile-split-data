import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { task, timeout, restartableTask, all } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';

export default class AthleteWidgetComponent extends Component {
  @service dataService;
  @service store;
  @tracked meets = [];
  @tracked eventCode;

  constructor() {
    super(...arguments);
    this.eventCode = this.args.athlete.events[0];
    this.getMeets.perform();
  }

  @action
  setEventCode(eventCode) {
    this.eventCode = eventCode;
  }

  get eventData() {
    return this.args.athlete.stats
      .filter((event) => event.eventCode == this.eventCode)
      .map((event) => {
        const meet = this.store.peekRecord('meet', event.meetId);
        event['date'] = meet.dateStart;
        return event;
      });
  }

  getMeets = restartableTask(async () => {
    const meetIds = [
      ...new Set(this.args.athlete.stats.map((event) => event.meetId)),
    ];
    const meetTasks = meetIds.map(async (id) => {
      const meet = await this.getMeet.perform(id);
      this.meets.push(meet);
    });
    this.meets = await all(meetTasks);
  });

  getMeet = task({ maxConcurrency: 1, enqueue: true }, async (meetId) => {
    await timeout(200);
    return await this.store.findRecord('meet', meetId);
  });
}
