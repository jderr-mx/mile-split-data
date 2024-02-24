import ApplicationSerializer from './application';

export default class AthleteSerializer extends ApplicationSerializer {
  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType,
  ) {
    const { data } = payload;
    const attributes = {};
    attributes['first-name'] = data.firstName;
    attributes['last-name'] = data.lastName;
    attributes['city'] = data.city;
    attributes['state'] = data.state;
    attributes['country'] = data.country;
    attributes['school-name'] = data.schoolName;
    attributes['college-name'] = data.collegeName;
    attributes['gender'] = data.gender;
    attributes['team-id'] = data.teamId;
    payload.data = {
      id: data.id,
      type: primaryModelClass.modelName,
      attributes,
      relationships: {
        team: {
          data: { id: data.teamId, type: 'team' },
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
