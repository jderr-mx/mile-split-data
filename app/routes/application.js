import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service dataService;

  async model() {
    const events = await this.store.findAll('event');
    this.dataService.events = events;
  }
}
