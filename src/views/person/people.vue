<template>
    <div>
        <smart-search class="layout-main--search"
                      route-name="PeopleCreate"
                      form-title="People"
                      method="get">
        </smart-search>
        <smart-table v-if="getSortablePeople.length > 0"
                     default-context="person"
                     :table-data="getSortablePeople">
        </smart-table>
        <p v-else>Nothing to see here!</p>
    </div>
</template>

<script>
  import SmartTable from '../../components/smart-table';
  import SmartSearch from '../../components/smart-search';
  import { mapGetters } from 'vuex';

  export default {
    name: "people",
    components: {
      SmartTable,
      SmartSearch
    },
    computed: {
      ...mapGetters([
        'getSortablePeople'
      ])
    }
  }
</script>

<style scoped>

</style>