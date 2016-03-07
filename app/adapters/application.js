import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Authorization: 'token 179b95aea1e179e14d7bee5e8fa676576cee9ae3'
  },

  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/charlespeters/${snapshot.attr('fullName')}`;
    return this.ajax(url, 'PUT', {});
  }
});
