import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('/', function () {
    this.route('repo', { path: '/repo/:repo_id', resetNamespace: true })
  })
})

export default Router
