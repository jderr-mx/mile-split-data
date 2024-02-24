import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AthleteRoute extends Route {
  @service store;
  model({ athlete_id }, transition) {
    return this.store.findRecord('athlete', athlete_id);
  }
}
