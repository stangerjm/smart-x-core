<template>
    <smart-form :form-data="formData"
                :on-submit="submit">
    </smart-form>
</template>

<script>
  import SmartForm from '../../components/smart-form';
  export default {
    name: "person-create",
    components: {
      SmartForm
    },
    data() {
      return {
        formData: this.createSchema({
          name: String,
          age: Number
        })
      }
    },
    methods: {
      submit: async function(submittedData) {
        let newPerson = {
          name: submittedData.name.value,
          age: submittedData.age.value
        };

        await this.$store.dispatch('addPerson', newPerson);
        this.$router.push('/person');
      }
    }
  }
</script>

<style scoped>

</style>