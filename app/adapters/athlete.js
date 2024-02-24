import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class AthleteAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  host = 'https://www.milesplit.com';
  findBelongsTo(store, snapshot, url) {
    super.findBelongsTo(store, snapshot, url);
  }
}
