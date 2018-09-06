<template>
    <div>
        <smart-form :on-submit="submit" form-title="Edit" :form-data="formData"></smart-form>
    </div>
</template>

<script>
  import SmartForm from "../../components/smart-form";

  export default {
    components: { SmartForm },
    name: "region-create",
    data() {
      return {
        formData: {
          name: String,
          code: String
        }
      }
    },
    methods: {
      async submit(submittedData) {
        await this.$store.dispatch('addRegion', submittedData);
        this.$router.push('/region');
      }
    }
  }
</script>

<style scoped>

</style>