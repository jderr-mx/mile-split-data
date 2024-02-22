import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service searchService;

  model(params, transition) {
    // return this.searchService.searchAthletes('Lola Derr');
    // return this.store.findAll('event');
  }
}
