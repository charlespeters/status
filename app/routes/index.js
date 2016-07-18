import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const r = Ember.$.getJSON('https://api.github.com/users/charlespeters/repos');
    return r;
  }
});
