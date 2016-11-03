/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app')

const Plugins = [
  {
    module: require('postcss-import')
  },
  {
    module: require('postcss-cssnext'),
    options: {
      warnForDuplicates: false,
      rem: false
    }
  },
  {
    module: require('cssnano'),
    options: {
      mergeRules: false
    }
  }
]

module.exports = function build (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://statusboard.now.sh/',
      customHash: null
    },
    postcssOptions: {
      enabled: true,
      compile: {
        plugins: Plugins
      }
    }
  })

  return app.toTree()
}
