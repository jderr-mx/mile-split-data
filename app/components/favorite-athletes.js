import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FavoriteAthletesComponent extends Component {
  @service dataService;

  @tracked
  localFavorites = this.dataService.favorites;

  get hasFavoriteAthletes() {
    return this.localFavorites.length > 0;
  }

  @action
  favoriteAthlete(athlete) {
    this.dataService.setFavorite(athlete);
  }
}
