import Model, { attr } from '@ember-data/model';

export default class PerformanceModel extends Model {
  @attr meetName;
  @attr meetStartDate;
  @attr meetEndDate;
  @attr eventName;
  @attr mark;
  @attr units;
  @attr season;
  @attr seasonYear;
}
