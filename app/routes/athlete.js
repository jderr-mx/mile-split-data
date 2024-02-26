import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AthleteRoute extends Route {
  @service store;
  @service dataService;
  async model({ athlete_id }, transition) {
    const events = this.dataService.events;
    const athlete = await this.store.findRecord('athlete', athlete_id);
    const athleteEvents = athlete.events.map((eventCode) => events[eventCode]);
    return {
      athlete,
      athleteEvents,
    };
  }
}
