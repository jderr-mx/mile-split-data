import Component from '@glimmer/component';
import { service } from '@ember/service';
export default class AthleteWidgetComponent extends Component {
  @service dataService;
  get athleteEvents() {
    const eventCodes = this.args.athlete.events;
    return eventCodes.map((code) => ({
      code,
      name: this.dataService.eventMap[code],
      topResult: this.getTopResult(code),
    }));
  }

  getTopResult(eventCode) {
    const athleteStats = this.args.athlete.stats;
    const eventResults = athleteStats.filter(
      (result) => result.eventCode == eventCode,
    );
    const unitValues = eventResults.map((item) => item.units);
    const maxUnitValue = Math.max(...unitValues);
    return eventResults.find((result) => result.units == maxUnitValue);
  }
}
