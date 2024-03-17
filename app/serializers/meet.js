import ApplicationSerializer from './application';

export default class MeetSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    const attributes = {};
    attributes['name'] = data.name;
    attributes['date-start'] = data.dateStart;
    attributes['date-end'] = data.dateEnd;
    attributes['season'] = data.season;
    attributes['year'] = data.seasonYear;
    attributes['city'] = data.venueCity;
    attributes['state'] = data.venueState;
    attributes['country'] = data.venueCountry;
    payload.data = {
      id: data.id,
      type: primaryModelClass.modelName,
      attributes,
    };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
