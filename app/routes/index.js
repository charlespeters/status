import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('user', 'charlespeters');
  },

  repos() {
    return this.store.findAll('repo');
  }
});
