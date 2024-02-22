'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
        plugins: [
          require('postcss-import'), // If you installed postcss-import
          require('tailwindcss')('./tailwind.config.js'), // If you have a Tailwind config file.
        ],
      },
    }, // Add options here
  });

  return app.toTree();
};
