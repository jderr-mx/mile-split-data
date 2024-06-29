import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  host = 'https://www.milesplit.com';
  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'performance':
        return `${this.host}/${this.namespace}/athletes/${query.id}/graph`;
      default:
        return super.urlForQuery(...arguments);
    }
  }
}
