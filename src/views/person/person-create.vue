<template>
    <smart-form :form-data="formData"
                :on-submit="submit">
    </smart-form>
</template>

<script>
  import SmartForm from '../../components/smart-form';
  import { createNamespacedHelpers } from 'vuex';

  const { mapActions } = createNamespacedHelpers('people');

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
      ...mapActions(['addPerson']),
      submit: async function(submittedData) {
        await this.addPerson(submittedData);
        this.$router.push('/person');
      }
    }
  }
</script>

<style scoped>

</style>