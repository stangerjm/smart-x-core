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
    data() {
      return {
        person: null
      }
    },
    methods: {
      async getPerson() {
        this.person = await this.$store.dispatch('fetchPerson', this.$route.params.id);
      }
    },
    created() {
      this.getPerson();
    }
  }
</script>

<style scoped>

</style>