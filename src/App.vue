<template>
    <div id="app" class="layout-grid layout-main">
        <smart-nav class="layout-main--nav"
                   :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225">
        </smart-nav>
        <main class="layout-main--content">
            <router-view></router-view>
        </main>
        <smart-footer class="layout-main--footer"></smart-footer>
    </div>
</template>

<script>
  import SmartNav from './components/smart-nav';
  import { config } from '../app.config.js';
  import SmartSearch from './components/smart-search';
  import SmartTabs from './components/smart-tabs';
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
        nav: config.nav
      }
    }
  }
</script>

<style lang="scss">
    @import "../styles/sass/layout/grid/grid";
    @import "../styles/sass/base/base";
</style>
