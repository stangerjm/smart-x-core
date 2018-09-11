<template>
    <div class="layout-subsection">
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
  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('people');

  export default {
    name: "person-details",
    components: {
      SmartDetails,
      SmartTabs
    },
    computed: {
      ...mapGetters(['getPersonSingle']),
      person() {
        return this.getPersonSingle(this.$route.params.id);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../../styles/sass/layout/subsection/subsection";
</style>