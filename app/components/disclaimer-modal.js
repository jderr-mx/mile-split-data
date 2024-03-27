import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DisclaimerModalComponent extends Component {
  @tracked
  show = true;

  @action
  dismissModal() {
    this.show = false;
  }
}
