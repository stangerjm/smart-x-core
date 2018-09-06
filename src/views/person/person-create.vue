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
        formData: {
          name: String,
          age: Number
        }
      }
    },
    methods: {
      submit: async function(submittedData) {
        await this.$store.dispatch('addPerson', submittedData);
        this.$router.push('/person');
      }
    }
  }
</script>

<style scoped>

</style>