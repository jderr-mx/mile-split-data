import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AthleteSummaryRoute extends Route {
  @service store;
  async model(params /*{ athlete_id }*/) {
    /*
    const athlete = await this.store.findRecord('athlete', athlete_id);
    return athlete;
    */
    return this.modelFor('athlete');
  }
}
