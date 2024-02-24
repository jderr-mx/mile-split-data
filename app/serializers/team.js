import ApplicationSerializer from './application';

export default class TeamSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    payload.data = {
      id: data.id,
      type: primaryModelClass.modelName,
      attributes: {
        name: data.name,
      },
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
