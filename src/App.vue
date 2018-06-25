<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne';
  import ProductListTwo from './components/ProductListTwo';

  export default {
    name: 'app',
      components: {
          ProductListOne,
          ProductListTwo
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
