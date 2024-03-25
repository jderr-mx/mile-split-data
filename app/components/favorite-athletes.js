import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class FavoriteAthletesComponent extends Component {
  @service dataService;

  get favoriteAthletes() {
    return this.dataService.favorites;
  }

  get hasFavoriteAthletes() {
    return this.dataService.favorites.length > 0;
  }
}
