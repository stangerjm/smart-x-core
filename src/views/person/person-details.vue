<template>
    <div class="layout-subsection">
        <smart-search class="layout-subsection--header"
                      form-title="Test"
                      method="get"
                      route-name="PeopleCreate">
        </smart-search>
        <smart-details class="layout-subsection--main"
                       v-if="person"
                       :detail-data="person">
        </smart-details>
        <smart-tabs class="layout-subsection--footer"></smart-tabs>
    </div>
</template>

<script>
  import SmartDetails from '../../components/smart-details';
  import SmartTabs from '../../components/smart-tabs-PROTO';
  import SmartSearch from '../../components/smart-search';

  export default {
    name: "person-details",
    components: {
      SmartDetails,
      SmartTabs,
      SmartSearch
    },
    computed: {
      person() {
        return this.$store.getters.getPersonSingle(this.$route.params.id);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../../styles/sass/layout/subsection/subsection";
</style>