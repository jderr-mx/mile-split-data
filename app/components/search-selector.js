import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchSelectorComponent extends Component {
  @service searchService;
  @tracked selected = 'Athlete';
  @tracked searchTerm = '';
  @tracked results = [];

  @action
  selectSearchType(type) {
    this.selected = type;
    this.results = [];
    this.searchTerm = '';
  }

  @action
  async doSearch() {
    const { data } = await this.searchService.doSearch(
      this.searchTerm,
      this.selected,
    );
    this.results = this.formatData(data);
  }

  @action
  setSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

  get athleteSelected() {
    if (this.selected == 'Athlete') return 'bg-indigo-500 text-indigo-50';
    return '';
  }
  get teamSelected() {
    if (this.selected == 'Team') return 'bg-indigo-500 text-indigo-50';
    return '';
  }

  formatData(data) {
    switch (this.selected) {
      case 'Athlete':
        return data.map((item) => ({
          text: `${item.firstName} ${item.lastName}, ${item.city} ${item.state}`,
          id: item.id,
        }));
      case 'Team':
        return data.map((item) => ({
          text: `${item.name}, ${item.city} ${item.state}`,
          id: item.id,
        }));
    }
  }
}
