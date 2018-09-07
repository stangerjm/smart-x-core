<template>
    <div v-if="region">
      <h1>Do you want to delete this record?</h1>
      <smart-details :detail-data="region"></smart-details>
      <button type="button" @click="deleteRegion">Delete</button>
    </div>
</template>

<script>
  import SmartDetails from "../../components/smart-details";

  export default {
    name: "region-delete",
    components: {
      SmartDetails
    },
    computed: {
      region() {
        return this.$store.getters.getRegionSingle(this.$route.params.id);
      }
    },
    methods: {
      async deleteRegion() {
        await this.$store.dispatch('deleteRegion', { id: this.$route.params.id });
        this.$router.push('/region');
      }
    }
  }
</script>

<style scoped>

</style>