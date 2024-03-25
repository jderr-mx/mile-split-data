import Service from '@ember/service';
import { service } from '@ember/service';

export default class DataService extends Service {
  @service store;
  namespace = 'api/v1';
  host = 'https://www.milesplit.com';
  eventMap = {};
  MEASURED_EVENTS = ['D', 'HT', 'WT', 'S', 'J', 'LJ', 'HJ', 'PV'];

  favorites = [];
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

  get events() {
    return this.eventMap;
  }

  set events(events) {
    this.eventMap = events.reduce(function (acc, item) {
      const itemCode = item.code.toUpperCase();
      acc[itemCode] = item.name;
      return acc;
    }, {});
  }

  isTimedEvent(eventCode) {
    return !this.MEASURED_EVENTS.includes(eventCode);
  }

  setFavorite(athlete) {
    if (this.favoriteAthletes.includes(athlete.id)) {
      this.favorites = this.favorites.filter((item) => item.id != athlete.id);
    } else {
      this.favorites.push({ id: athlete.id, name: athlete.name });
    }
    const serializedAthletes = this.favorites.map((athlete) => ({
      id: athlete.id,
      name: athlete.name,
    }));
    localStorage.setItem(
      'favoriteAthletes',
      JSON.stringify(serializedAthletes),
    );
  }

  get favoriteAthletes() {
    return this.favorites.map((item) => item.id);
  }
}
