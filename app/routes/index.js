import Ember from 'ember'

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  beforeModel () {
    const u = Ember.$.getJSON('https://api.github.com/users/charlespeters')
    // console.log(u)
    this.set('user', u)

    // console.log(this.get('user'))

    return this.get('user')
  },
  model () {
    const r = this.get('ajax').request('https://api.github.com/users/charlespeters/repos', {
      data: {
        page: 1,
        per_page: 999,
        type: 'owner',
        sort: 'updated'
      }
    })

    console.log(r)

    return r
  }
})
