<template>
    <div id="app" class="layout-grid layout-main">
        <smart-nav class="layout-main--nav"
                   :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225">
        </smart-nav>
        <main class="layout-main--content">
            <router-view></router-view>
            <!--<smart-table :table-data="regions" default-context="/"></smart-table>-->
        </main>
        <smart-footer class="layout-main--footer"></smart-footer>
    </div>
</template>

<script>
  import SmartNav from './components/smart-nav';
  import { config } from '../app.config.js';
  import SmartSearch from './components/smart-search';
  import SmartTabs from './components/smart-tabs-PROTO';
  import SmartDetails from './components/smart-details';
  import SmartFooter from './components/smart-footer';
  import SmartTable from './components/smart-table';
  import SmartAccordion from './components/smart-accordion';

  export default {
    name: 'app',
    components: {
      SmartNav,
      SmartSearch,
      SmartTabs,
      SmartDetails,
      SmartFooter,
      SmartTable,
      SmartAccordion
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
          },
          regions:
            [
              { id: 1, name: 'EASTERN WA', code: 'E-WA' },
              { id: 2, name: 'EASTERN WA', code: 'E-WA' },
              { id: 3, name: 'EASTERN WA', code: 'E-WA' },
              { id: 4, name: 'EASTERN WA', code: 'E-WA' },
              { id: 5, name: 'EASTERN WA', code: 'E-WA' },
              { id: 6, name: 'EASTERN WA', code: 'E-WA' },
              { id: 7, name: 'EASTERN WA', code: 'E-WA' },
              { id: 8, name: 'EASTERN WA', code: 'E-WA' },
              { id: 9, name: 'EASTERN WA', code: 'E-WA' },
              { id: 10, name: 'EASTERN WA', code: 'E-WA' },
              { id: 11, name: 'EASTERN WA', code: 'E-WA' },
              { id: 12, name: 'EASTERN WA', code: 'E-WA' },
            ]
      }
    },
    created() {
      this.$store.dispatch('fetchPeopleData');
    }
  }
</script>

<style lang="scss">
    @import "../sass/layout/grid/grid";
    @import "../sass/base/base";
</style>
