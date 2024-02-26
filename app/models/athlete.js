import Model, { attr, belongsTo } from '@ember-data/model';
import { A } from '@ember/array';

export default class AthleteModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr city;
  @attr state;
  @attr country;
  @attr schoolName;
  @attr collegeName;
  @attr gender;
  @attr gradYear;
  @attr stats;
  @belongsTo('team', { async: true, inverse: null }) team;

  get events() {
    const eventCodeArray = this.stats.map((item) => item.eventCode);
    return A(eventCodeArray).uniq();
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get initials() {
    const firstInitial = this.firstName.slice(0, 1);
    const lastInitial = this.lastName.slice(0, 1);
    return `${firstInitial}${lastInitial}`;
  }
}
