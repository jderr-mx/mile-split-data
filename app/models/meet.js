import Model, { attr } from '@ember-data/model';

export default class MeetModel extends Model {
  @attr name;
  @attr dateStart;
  @attr dateEnd;
  @attr season;
  @attr year;
  @attr city;
  @attr state;
  @attr country;
}
