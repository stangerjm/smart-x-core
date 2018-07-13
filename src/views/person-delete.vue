<template>
    <div>
        <h1>Delete this record?</h1>
        <div>
            <div v-for="personDetail in person">{{personDetail}}</div>
        </div>
        <button type="button" @click="deletePerson">Delete</button>
    </div>
</template>

<script>
  export default {
    name: "person-delete",
    computed: {
      person() {
        return this.$store.getters.getPerson(this.$route.params.id)
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