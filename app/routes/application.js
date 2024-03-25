import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service dataService;

  beforeModel() {
    const localFavorites = localStorage.getItem('favoriteAthletes');
    if (localFavorites) {
      const favorites = JSON.parse(localFavorites);
      this.dataService.favorites = favorites;
    }
  }
  async model() {
    const events = await this.store.findAll('event');
    this.dataService.events = events;
  }
}
