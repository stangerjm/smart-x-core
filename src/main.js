import Vue from 'vue';
import bitBtn from './components/bit-btn';
import bitInput from './components/bit-input';
import bitIcon from './components/bit-icon';
import bitLoading from './components/bit-loading';
import App from './App.vue';
import store from './store';
import { formatFromCamelCase } from './global/mixins';

//Register base components globally
Vue.component('bit-btn', bitBtn);
Vue.component('bit-input', bitInput);
Vue.component('bit-icon', bitIcon);
Vue.component('bit-loading', bitLoading);

//Apply base styles to all components
require('../sass/base/_base.scss');

//Mounted mixin
Vue.mixin({
    mounted() {
      this.$emit('mounted');
    }
});

//Format camel case mixin
Vue.mixin({
    methods: {
        formatFromCamelCase: formatFromCamelCase
    }
});

Vue.config.productionTip = false;

new Vue({
    store: store,
    components: {
        //Load components asynchronously so that we only load the components that we need when we need them.
        bitDropList: () => import('./components/bit-dropList'),
        blockActionContainer: () => import('./components/block-actionContainer'),
        blockNavList: () => import('./components/block-navList'),
        blockMultiSelect: () => import('./components/block-multiSelect'),
        smartSearch: () => import('./components/smart-search'),
        smartNav: () => import('./components/smart-nav'),
        smartTable: () => import('./components/smart-table'),
        smartDetails: () => import('./components/smart-details'),
        smartAccordion: () => import('./components/smart-accordion'),
        smartForm: () => import('./components/smart-form'),
        smartModal: () => import('./components/smart-modal'),
        stackTableCollapsible: () => import('./components/stack-tableCollapsible')
    },
    render: h => h(App)
}).$mount('#app');
