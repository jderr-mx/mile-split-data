import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchSelectorComponent extends Component {
  @service searchService;
  @tracked selected = null;
  @tracked searchTerm = 'Search Text';

  @action
  selectSearchType(type) {
    this.selected = type;
  }

  @action
  async doSearch() {
    const results = await this.searchService.doSearch(
      this.searchTerm,
      this.selected,
    );
    console.log(results);
  }

  @action
  setSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

  get athleteSelected() {
    if (this.selected == 'Athlete') return 'bg-indigo-300';
    return '';
  }
  get teamSelected() {
    if (this.selected == 'Team') return 'bg-indigo-300';
    return '';
  }
  get meetSelected() {
    if (this.selected == 'Meet') return 'bg-indigo-300';
    return '';
  }
}
