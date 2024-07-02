import ApplicationSerializer from './application';

export default class PerformanceSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const {
      data: { performances },
    } = payload;
    const newPayload = performances.reduce(
      (acc, item) => {
        const attributes = {};
        attributes['athlete-id'] = item.athleteId;
        attributes['event-name'] = item.eventName;
        attributes['event-code'] = item.eventCode.toUpperCase();
        attributes['meet-name'] = item.meetName;
        attributes['meet-start-date'] = item.meetStartDate;
        attributes['meet-end-date'] = item.meetEndDate;
        attributes['season'] = item.season;
        attributes['season-year'] = item.seasonYear;
        attributes['mark'] = item.mark;
        attributes['units'] = item.units;
        attributes['meet-id'] = item.meetId;
        attributes['date'] = item.meetStartDate;
        acc.data.push({ id: item.id, type: 'performance', attributes });
        return acc;
      },
      { data: [] },
    );
    return super.normalizeResponse(
      store,
      primaryModelClass,
      newPayload,
      id,
      requestType,
    );
  }
}
