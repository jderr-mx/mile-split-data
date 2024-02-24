import { module, test } from 'qunit';
import { setupTest } from 'mile-split-data/tests/helpers';

module('Unit | Route | athlete', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:athlete');
    assert.ok(route);
  });
});
