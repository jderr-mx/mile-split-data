import ApplicationSerializer from './application';

export default class TeamSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    payload.data = data.map(function (item) {
      return {
        id: item.id,
        type: primaryModelClass.modelName,
        attributes: {
          name: item.name,
        },
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
