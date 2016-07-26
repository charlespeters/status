import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    this.set('repo', this.modelFor('index'));
  },
  model(params) {
    return this.store.findRecord('repo', params.id);
  }
});
