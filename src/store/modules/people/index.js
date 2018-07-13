import * as getters from './lib/getters';
import * as actions from './lib/actions';
import * as mutations from './lib/mutations';

const people = {
  state: {
    people: []
  },
  getters,
  actions,
  mutations
};

export default people;