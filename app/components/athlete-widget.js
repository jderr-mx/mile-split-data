import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { task, timeout, restartableTask, all } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class AthleteWidgetComponent extends Component {
  @service dataService;
  @service store;
  @tracked meets = [];
  @tracked eventCode;

  constructor() {
    super(...arguments);
    this.eventCode = this.args.athlete.events[0];
    this.athleteId = this.args.athlete.id;
    this.getMeets.perform();
  }

  @action
  setEventCode(eventCode) {
    this.eventCode = eventCode;
  }

  get eventData() {
    return this.store
      .peekAll('performance')
      .filter(
        (performance) =>
          performance.eventCode == this.eventCode &&
          performance.athleteId == this.athleteId,
      ).sort((a, b) => {
        return Date.parse(a.date) - Date.parse(b.date);
      });
  }

  get sortedEventData() {
    return this.eventData.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  }

  getMeets = restartableTask(async () => {
    const eventSeasonArray = A(
      this.args.athlete.stats.map(({ eventCode, season }) => ({
        eventCode,
        season,
      })),
    ).uniqBy(({ eventCode, season }) => `${eventCode}-${season}`);

    const performanceTasks = eventSeasonArray.map(
      async ({ eventCode, season }) => {
        await this.getPerformances.perform(this.athleteId, season, eventCode);
      },
    );
    await all(performanceTasks);
  });

  getPerformances = task(
    { maxConcurrency: 5, enqueue: true },
    async (athleteId, season, eventCode) => {
      await timeout(200);
      return await this.store.query('performance', {
        season: season,
        event: eventCode,
        m: 'GET',
        id: athleteId,
      });
    },
  );
}
