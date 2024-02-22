import ApplicationSerializer from './application';

export default class TeamSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    payload.data = data.map(function (item) {
      const attributes = {};
      attributes['code'] = item.code;
      attributes['name'] = item.name;
      attributes['short-name'] = item.shortName;
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
