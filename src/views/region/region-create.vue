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
        formData: this.createSchema({
          name: String,
          code: String
        })
      }
    },
    methods: {
      submit(submittedData) {

      }
    }
  }
</script>

<style scoped>

</style>