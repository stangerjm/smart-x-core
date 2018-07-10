<template>
    <div id="app" class="layout-grid layout-main">
        <smart-nav class="layout-main--nav"
                   :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225">
        </smart-nav>
        <smart-search class="layout-main--search"
                      :is-expanded="false"
                      action="/"
                      form-title="IIP"
                      method="get">
        </smart-search>
        <main class="layout-main--content">
            <smart-table default-context="/"
                         :table-data="getRegions">
            </smart-table>
        </main>
        <smart-footer class="layout-main--footer"></smart-footer>
    </div>
</template>

<script>
  import SmartTable from './components/smart-table';
  import SmartNav from './components/smart-nav';
  import { config } from '../app.config.js';
  import { mapGetters } from 'vuex';
  import SmartSearch from './components/smart-search';
  import SmartTabs from './components/smart-tabs-PROTO';
  import SmartDetails from './components/smart-details';
  import SmartFooter from './components/smart-footer';

  export default {
    name: 'app',
    components: {
      SmartTable,
      SmartNav,
      SmartSearch,
      SmartTabs,
      SmartDetails,
      SmartFooter
    },
    data() {
      return {
        nav: config.nav,
        dummyData:
          {
            group: 'Awesomeness',
            members: 8,
            test: true,
            person1: 'James',
            person2: 'Jenna',
            person3: 'Joel',
            person4: 'Jacquie',
            person5: 'Joseph',
            person6: 'Jacob',
            person7: 'Jessica',
            person8: 'Billy',
          }
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

<style lang="scss">
    @import "../sass/layout/grid/grid";
    @import "../sass/base/base";
</style>
