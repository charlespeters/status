/* global atob */

import Ember from 'ember'

export default Ember.Component.extend({
  init () {
    this._super()
    this.set('MD', atob(this.get('content')))
  }
})
