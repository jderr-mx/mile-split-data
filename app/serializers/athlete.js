import ApplicationSerializer from './application';

export default class AthleteSerializer extends ApplicationSerializer {
  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType,
  ) {
    const { data: stats } = payload;
    const athlete = payload['_embedded']['athlete'];
    const attributes = {};
    attributes['first-name'] = athlete.firstName;
    attributes['last-name'] = athlete.lastName;
    attributes['city'] = athlete.city;
    attributes['state'] = athlete.state;
    attributes['country'] = athlete.country;
    attributes['school-name'] = athlete.schoolName;
    attributes['college-name'] = athlete.collegeName;
    attributes['gender'] = athlete.gender;
    attributes['team-id'] = athlete.teamId;
    attributes['grad-year'] = athlete.gradYear;
    attributes['stats'] = stats;
    payload.data = {
      id: athlete.id,
      type: primaryModelClass.modelName,
      attributes,
      relationships: {
        team: {
          data: { id: athlete.teamId, type: 'team' },
        },
      },
    };
    return super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
