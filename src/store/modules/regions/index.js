import * as getters from './lib/getters';
import * as actions from './lib/actions';
import * as mutations from './lib/mutations';

const regions = {
  state: {
    regions: [
      {'id': 1, 'name': 'James'},
      {'id': 1, 'name': 'Jenna'},
      {'id': 1, 'name': 'Joel'},
      {'id': 1, 'name': 'Jacob'},
      {'id': 1, 'name': 'Joseph'},
      {'id': 1, 'name': 'Sandi'}
    ]
  },
  getters,
  actions,
  mutations
};

export default regions;