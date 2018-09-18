<template>
    <div>
        <smart-search class="layout-main--search"
                      route-name="PeopleCreate"
                      form-title="People"
                      method="get">
        </smart-search>
        <smart-table v-if="getPeople.length > 0"
                     default-context="person"
                     :sortMethod="this.getDataSortedBy"
                     :table-data="getPeople">
        </smart-table>
        <p v-else>Nothing to see here!</p>
    </div>
</template>

<script>
import SmartTable from "../../components/smart-table";
import SmartSearch from "../../components/smart-search";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("people");

export default {
  name: "people",
  components: {
    SmartTable,
    SmartSearch
  },
  computed: {
    ...mapGetters(["getPeople", "getDataSortedBy"])
  }
};
</script>

<style scoped>
</style>
