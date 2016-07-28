import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    const u = Ember.$.getJSON('https://api.github.com/users/charlespeters');
    console.log(u);

    this.set('user', u);

    console.log(this.get('user'));

    return this.get('user');
  },
  model() {
    const r = Ember.$.getJSON('https://api.github.com/users/charlespeters/repos?page=1&per_page=999&type=owner&sort=updated');
    return r;
  },
});
