import Ember from 'ember'

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model ({ repo_id }) {
    const r = this.get('ajax').request(`https://api.github.com/repos/charlespeters/${repo_id}`)
    console.log(r)
    return r
  }
})
