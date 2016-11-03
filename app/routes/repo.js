import Ember from 'ember'

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model ({ repoID }) {
    const r = this.get('ajax').request(`https://api.github.com/repos/charlespeters/${repoID}`)
    console.log(r)
    return r
  }
})
