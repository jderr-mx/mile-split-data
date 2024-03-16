import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AthleteSummaryRoute extends Route {
  @service store;
  async model() {
    return this.modelFor('athlete');
  }
}
