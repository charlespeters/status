/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function build(defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      enabled: true,
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
          },
          {
            module: require('postcss-cssnext'),
            options: {
              warnForDuplicates: false,
              rem: false,
            },
          },
          {
            module: require('cssnano'),
            options: {
              mergeRules: false,
            },
          },
        ],
      },
    },
  });

  return app.toTree();
};
