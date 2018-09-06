<template>
  <div>
    <smart-search route-name="RegionCreate" method="get" form-title="Region"></smart-search>
    <smart-table :table-data="getRegions" default-context="region"></smart-table>
  </div>
</template>

<script>
  import SmartTable from "../../components/smart-table";
  import SmartSearch from "../../components/smart-search";
  import { mapGetters } from 'vuex';

  export default {
    components: {
      SmartSearch,
      SmartTable
    },
    name: "region",
    computed: {
      ...mapGetters([
        'getRegions'
      ])
    }
  }
</script>

<style scoped>

</style>