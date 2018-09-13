<template>
    <div id="app" class="layout-grid layout-main">

      <layout-grid>

        <template slot="header">

          <smart-nav :nav-items="nav"
                     nav-title="Admin"
                     usr="JMST225">
          </smart-nav>

        </template>

        <template slot="content">

          <router-view></router-view>

        </template>

        <template slot="footer">

          <smart-footer></smart-footer>

        </template>

      </layout-grid>
    </div>
</template>

<script>
  import SmartNav from './components/smart-nav';
  import { config } from '../app.config.js';
  import SmartSearch from './components/smart-search';
  import SmartDetails from './components/smart-details';
  import SmartFooter from './components/smart-footer';
  import SmartTable from './components/smart-table';
  import SmartAccordion from './components/smart-accordion';
  import LayoutGrid from './components/layout-grid';

  export default {
    name: 'app',
    components: {
      SmartNav,
      SmartSearch,
      SmartDetails,
      SmartFooter,
      SmartTable,
      SmartAccordion,
      LayoutGrid
    },
    data() {
      return {
        nav: config.nav
      }
    }
  }
</script>

<style lang="scss">
    @import "../styles/sass/base/base";
</style>
