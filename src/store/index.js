import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import regions from './modules/regions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    products: products,
    regions: regions
  }
});

if (module.hot) {
  module.hot.accept([
    './modules/products',
    './modules/regions'
  ], () => {
    store.hotUpdate({
      modules: {
        products: products,
        regions: regions
      }
    });
  });
}

export default store;