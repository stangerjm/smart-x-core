<template>
    <div v-if="region">
      <h1>Do you want to delete this record?</h1>
      <smart-details :detail-data="region"></smart-details>
      <button type="button" @click="deleteRecord">Delete</button>
    </div>
</template>

<script>
  import SmartDetails from "../../components/smart-details";
  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters, mapActions } = createNamespacedHelpers('regions');

  export default {
    name: "region-delete",
    components: {
      SmartDetails
    },
    computed: {
      ...mapGetters(['getRegionSingle']),
      region() {
        return this.getRegionSingle(this.$route.params.id);
      }
    },
    methods: {
      ...mapActions(['deleteRegion']),
      async deleteRecord() {
        await this.deleteRegion({ id: this.$route.params.id });
        this.$router.push('/region');
      }
    }
  }
</script>

<style scoped>

</style>