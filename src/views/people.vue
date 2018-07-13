<template>
    <div>
        <smart-search class="layout-main--search"
                      route-name="PeopleCreate"
                      form-title="People"
                      method="get">
        </smart-search>
        <smart-table default-context="people"
                     :table-data="getPeople">
        </smart-table>
    </div>
</template>

<script>
  import SmartTable from '../components/smart-table';
  import SmartSearch from '../components/smart-search';
  import { mapGetters } from 'vuex';
  export default {
    name: "people",
    components: {
      SmartTable,
      SmartSearch
    },
    computed: {
      ...mapGetters([
        'getPeople'
      ])
    }
  }
</script>

<style scoped>

</style>