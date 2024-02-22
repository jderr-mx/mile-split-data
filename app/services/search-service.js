import Service from '@ember/service';

export default class SearchService extends Service {
  namespace = 'api/v1';
  host = 'https://www.milesplit.com';

  searchTypesArray = ['athletes', 'teams'];

  async searchAthletes(query) {
    const response = await fetch(
      `${this.host}/${this.namespace}/athletes/search?q=${query}`,
    );
    return await response.json();
  }

  async searchTeams(query) {
    const response = await fetch(
      `${this.host}/${this.namespace}/teams/search?q=${query}`,
    );
    return await response.json();
  }

  async doSearch(query, type) {
    switch (type) {
      case 'Athlete':
        return await this.searchAthletes(query);
      case 'Team':
        return await this.searchTeams(query);
    }
  }
}
