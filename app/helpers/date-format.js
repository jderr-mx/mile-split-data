import { helper } from '@ember/component/helper';

export default helper(function dateFormat(positional) {
  return new Date(positional).toLocaleDateString();
});
