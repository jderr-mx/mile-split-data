import { module, test } from 'qunit';

import { setupTest } from 'mile-split-data/tests/helpers';

module('Unit | Serializer | athlete', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('athlete');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('athlete', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
