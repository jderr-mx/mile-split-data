import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class AthleteHeaderComponent extends Component {
  @service dataService;

  @tracked isFavorite = this.dataService.favoriteAthletes.includes(
    this.args.athlete.id,
  );
  @action
  favoriteAthlete(athlete) {
    this.dataService.setFavorite(athlete);
    this.isFavorite = !this.isFavorite;
  }
}
