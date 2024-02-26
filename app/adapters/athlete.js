import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class AthleteAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  host = 'https://www.milesplit.com';
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    return `${baseUrl}/stats`;
  }
}
