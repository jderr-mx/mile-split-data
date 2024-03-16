import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AthleteRoute extends Route {
  @service store;
  @service router;
  afterModel() {
    this.router.transitionTo('athlete.summary');
  }
  async model({ athlete_id }) {
    const athlete = await this.store.findRecord('athlete', athlete_id);
    return athlete;
  }
}
