<template>
    <div>
        <smart-form form-title="Edit" :form-data="formData" :on-submit="submit"></smart-form>
    </div>
</template>

<script>
  import SmartForm from '../components/smart-form';
  export default {
    name: "person-edit",
    components: {
      SmartForm
    },
    data() {
      return {
        formData: {
          name: {
            type: String,
            value: ''
          },
          age: {
            type: Number,
            value: null
          },
          birth: {
            type: Date,
            value: null
          }
        }
      }
    },
    methods: {
      async submit(formData) {
        let newPerson = {
          name: formData.name.value,
          age: formData.age.value
        };

        await this.$store.dispatch('editPerson', { person: newPerson, id: this.$route.params.id});
        this.$router.push('/people');
      },
      getPerson() {
        const person = this.$store.getters.getPersonSingle(this.$route.params.id);

        this.formData.name.value = person.name;
        this.formData.age.value = person.age;
      }
    },
    created() {
      this.getPerson();
    }
  }
</script>

<style scoped>

</style>