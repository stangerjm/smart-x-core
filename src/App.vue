<template>
    <div id="app">
        <smart-nav :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225"></smart-nav>
        <!--<smart-details :detail-data="{ group: 'Awesomeness', members: 8 }"></smart-details>-->
        <smart-search :is-expanded="false" action="/" form-title="IIP" method="get"></smart-search>
        <!--<smart-table default-context="/"-->
                     <!--:table-data="getRegions"></smart-table>-->
        <smart-tabs style="margin: 5px"></smart-tabs>
    </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne';
  import ProductListTwo from './components/ProductListTwo';
  import SmartTable from './components/smart-table';
  import SmartNav from './components/smart-nav';
  import { config } from '../app.config.js';
  import { mapGetters } from 'vuex';
  import SmartSearch from './components/smart-search';
  import SmartTabs from './components/smart-tabs-PROTO';
  import SmartDetails from './components/smart-details';

  export default {
    name: 'app',
    components: {
      ProductListOne,
      ProductListTwo,
      SmartTable,
      SmartNav,
      SmartSearch,
      SmartTabs,
      SmartDetails
    },
    data() {
      return {
        nav: config.nav
      }
    },
    computed: {
      ...mapGetters([
        'getRegions'
      ])
    },
    created() {
      this.$store.dispatch('fetchRegionData');
    }
  }
</script>

<style>
    body {
        margin: 0;
        padding: 0;

        font-family: Ubuntu, sans-serif;
        color: #555;
    }
</style>
