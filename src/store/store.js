import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {
                name: 'Banana',
                price: 2
            },
            {
                name: 'Pear',
                price: 3
            },
            {
                name: 'Green Pepper',
                price: 2
            },
            {
                name: 'Red Pepper',
                price: 1
            }
        ]
    },
    getters: {
        saleProducts: state => {
            return state.products.map(product => {
                return {
                    name: `${product.name}`,
                    price: product.price / 2
                }
            });
        }
    },
    mutations: {
        increasePrice: (state) => {
            state.products.forEach(product => {
                product.price++;
            });
        },
        reducePrice: (state) => {
            state.products.forEach(product => {
                product.price--;
            })
        }
    },
    actions: {
        increasePrice: (context) => {
            setTimeout(() => {
                context.commit('increasePrice');
            }, 300)
        },
        reducePrice: (context) => {
            setTimeout(() => {
                context.commit('reducePrice');
            }, 300)
        }
    }
});