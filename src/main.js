import Vue from 'vue';
import bitBtn from './components/bit-btn';
import bitInput from './components/bit-input';
import bitIcon from './components/bit-icon';
import bitLoading from './components/bit-loading';
import App from './App.vue';
import store from './store';
import Router from './router';
import { toTitleCase, createSchema, getNonReactiveCopy, getItemId } from './global/mixins';

//Register base components globally
Vue.component('bit-btn', bitBtn);
Vue.component('bit-input', bitInput);
Vue.component('bit-icon', bitIcon);
Vue.component('bit-loading', bitLoading);

//Use Moment library (vue-edition)
Vue.use(require('vue-moment'));

//Apply base styles to all components
require('../styles/sass/base/_base.scss');

//title case, create schema, and get non-reactive copy mixins
Vue.mixin({
  methods: {
    createSchema: createSchema,
    getNonReactiveCopy: getNonReactiveCopy,
    getItemId: getItemId
  },
  filters: {
    toTitleCase: toTitleCase
  }
});

Vue.config.productionTip = false;

new Vue({
    store: store,
    router: Router,
    components: {
        //Load components asynchronously so that we only load the components that we need when we need them.
        bitDropList: () => import('./components/bit-dropList'),
        blockActionContainer: () => import('./components/block-actionContainer'),
        blockNavList: () => import('./components/block-navList'),
        smartSearch: () => import('./components/smart-search'),
        smartNav: () => import('./components/smart-nav'),
        smartTable: () => import('./components/smart-table'),
        smartDetails: () => import('./components/smart-details'),
        smartAccordion: () => import('./components/smart-accordion'),
        smartForm: () => import('./components/smart-form'),
        stackTableCollapsible: () => import('./components/stack-tableCollapsible'),
        smartTabs: () => import('./components/smart-tabs'),
        layoutGrid: () => import('./components/layout-grid')
    },
    render: h => h(App),
    created() {
      this.$store.dispatch('people/fetchPeopleData');
      this.$store.dispatch('regions/fetchRegionData');
    }
}).$mount('#app');
