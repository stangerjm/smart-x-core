<template>
    <div>
        <h1>Edit</h1>
        <form action="/people">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="name">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" v-model="age">

            <button type="button" @click="submit">Submit</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "person-edit",
    data() {
      return {
        name: '',
        age: ''
      }
    },
    methods: {
      async submit() {
        let newPerson = {
          name: this.name,
          age: this.age
        };

        await this.$store.dispatch('editPerson', { person: newPerson, id: this.$route.params.id});
        this.$router.push('/people');
      },
      async getPerson() {
        const person = await this.$store.dispatch('fetchPerson', this.$route.params.id);

        this.name = person.name;
        this.age = person.age;
      }
    },
    created() {
      this.getPerson();
    }
  }
</script>

<style scoped>

</style>