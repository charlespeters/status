import Ember from 'ember'
import RSVP from 'rsvp'

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model ({ repo_id }) {
    const repo = this.get('ajax').request(`https://api.github.com/repos/charlespeters/${repo_id}`)
    const readme = this.get('ajax').request(`https://api.github.com/repos/charlespeters/${repo_id}/readme`)

    console.log(repo, readme)

    return RSVP.hash({
      repo,
      readme
    })
  }
})
