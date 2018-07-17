<template>
    <div v-if="person">
        <h1>Delete this record?</h1>
        <smart-details :detail-data="person"></smart-details>
        <button type="button" @click="deletePerson">Delete</button>
    </div>
</template>

<script>
  import SmartDetails from '../components/smart-details';
  export default {
    name: "person-delete",
    components: {
      SmartDetails
    },
    computed: {
      person() {
        return this.$store.getters.getPersonSingle(this.$route.params.id);
      }
    },
    methods: {
      async deletePerson() {
        await this.$store.dispatch('deletePerson', { id: this.$route.params.id });
        this.$router.push('/people');
      }
    }
  }
</script>

<style scoped>

</style>