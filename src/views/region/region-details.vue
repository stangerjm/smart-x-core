<template>
    <div class="layout-subsection">
        <smart-details class="layout-subsection--main"
                       v-if="region"
                       :detail-data="region"></smart-details>
        <smart-tabs class="layout-subsection--footer"></smart-tabs>
    </div>
</template>

<script>
  import SmartTabs from '../../components/smart-tabs-PROTO';
  import SmartDetails from "../../components/smart-details";

  export default {
    components: {
      SmartDetails,
      SmartTabs
    },
    name: "region-details",
    computed: {
      region() {
        return this.$store.getters.getRegionSingle(this.$route.params.id);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../../styles/sass/layout/subsection/subsection";
</style>