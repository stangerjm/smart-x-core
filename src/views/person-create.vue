<template>
    <div>
        <smart-form :form-data="formData" :on-submit="submit"></smart-form>
    </div>
</template>

<script>
  import SmartForm from '../components/smart-form';
  export default {
    name: "person-create",
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
          }
        }
      }
    },
    methods: {
      submit: async function(formData) {
        let newPerson = {
          name: formData.name.value,
          age: formData.age.value
        };

        await this.$store.dispatch('addPerson', newPerson);
        this.$router.push('/people');
      }
    }
  }
</script>

<style scoped>

</style>