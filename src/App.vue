<template>
    <div id="app">
        <smart-nav :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225"></smart-nav>
        <product-list-one></product-list-one>
        <product-list-two></product-list-two>
        <smart-table default-context="/"
                     :table-data="tableData"></smart-table>
    </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne';
  import ProductListTwo from './components/ProductListTwo';
  import SmartTable from './components/smart-table';
  import SmartNav from './components/smart-nav';
  import {config} from '../app.config.js';

  export default {
    name: 'app',
    components: {
      ProductListOne,
      ProductListTwo,
      SmartTable,
      SmartNav
    },
    data() {
      return {
        tableData: [
          {'id': 1, 'name': 'James'},
          {'id': 1, 'name': 'Jenna'},
          {'id': 1, 'name': 'Joel'},
          {'id': 1, 'name': 'Jacob'},
          {'id': 1, 'name': 'Joseph'},
          {'id': 1, 'name': 'Sandi'},
        ],
        nav: config.nav
      }
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
