import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class AthleteWidgetComponent extends Component {
  @tracked eventCode;
  constructor() {
    super(...arguments);
    this.eventCode = this.args.athlete.events[0];
  }

  @action
  setEventCode(eventCode) {
    this.eventCode = eventCode;
  }

  get eventData() {
    return this.args.athlete.stats.filter(
      (event) => event.eventCode == this.eventCode,
    );
  }
}
