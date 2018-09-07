<template>
    <div>
        <smart-search route-name="RegionCreate"
                      method="get"
                      form-title="Region">
        </smart-search>
        <smart-table :table-data="getRegions"
                     default-context="region"
                     v-if="getRegions.length > 0">
        </smart-table>
        <p v-else>No regions yet. Let's add one!</p>
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