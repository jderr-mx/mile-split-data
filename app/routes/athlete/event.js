import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class AthleteEventRoute extends Route {
  @service store;
  async model({ code }) {
    const { athlete_id } = this.paramsFor('athlete');
    let athlete = await this.store.peekRecord('athlete', athlete_id);
    if (!athlete) athlete = await this.store.findRecord('athlete', athlete_id);
    const stats = athlete.stats.filter((item) => item.eventCode == code);
    const events = this.store.peekAll('event');
    const [event] = events.filter((item) => item.code == code);
    return { athlete, code, event, stats };
  }
}
