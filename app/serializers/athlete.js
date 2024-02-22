import ApplicationSerializer from './application';

export default class AthleteSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    payload.data = data.map(function (item) {
      const attributes = {};
      attributes['first-name'] = item.firstName;
      attributes['last-name'] = item.lastName;
      attributes['city'] = item.city;
      attributes['state'] = item.state;
      attributes['country'] = item.country;
      attributes['school-name'] = item.schoolName;
      attributes['college-name'] = item.collegeName;
      return {
        id: item.id,
        type: primaryModelClass.modelName,
        attributes,
      };
    });
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
