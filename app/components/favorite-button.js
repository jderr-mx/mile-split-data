import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FavoriteButtonComponent extends Component {
  @tracked
  favorite = this.args.isFavorite;

  @action
  setFavorite() {
    this.favorite = !this.favorite;
    this.args.clickHandler();
  }
}
