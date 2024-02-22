import Model, { attr } from '@ember-data/model';

export default class AthleteModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr city;
  @attr state;
  @attr country;
  @attr schoolName;
  @attr collegeName;
}
