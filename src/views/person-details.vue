<template>
    <div>
        <smart-details v-if="person" :detail-data="person"></smart-details>
    </div>
</template>

<script>
  import SmartDetails from '../components/smart-details';
  export default {
    name: "person-details",
    components: {
      SmartDetails
    },
    computed: {
      person() {
        return this.$store.getters.getPersonSingle(this.$route.params.id);
      }
    }
  }
</script>

<style scoped>

</style>