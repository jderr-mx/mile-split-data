import { module, test } from 'qunit';
import { setupRenderingTest } from 'mile-split-data/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-selector', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SearchSelector />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SearchSelector>
        template block text
      </SearchSelector>
    `);

    assert.dom().hasText('template block text');
  });
});
