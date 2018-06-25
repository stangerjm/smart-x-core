import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        products: products
    }
});

if (module.hot) {
    module.hot.accept([
        './modules/products'
    ], () => {
        store.hotUpdate({
            modules: {
                products: products
            }
        });
    });
}

export default store;