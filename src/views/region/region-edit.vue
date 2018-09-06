<template>
    <div>
        <smart-form form-title="Edit" :form-data="formData" :on-submit="submit"></smart-form>
    </div>
</template>

<script>
  import SmartForm from "../../components/smart-form";

  export default {
    components: {SmartForm},
    name: "region-edit",
    data() {
      return {
        formData: {
          name: String,
          code: String
        }
      }
    },
    methods: {
      async submit(formData) {
        let newRegion = {
          name: formData.name.value,
          code: formData.code.value
        };

        await this.$store.dispatch('editRegion', { region: newRegion, id: this.$route.params.id });
        this.$router.push('/region');
      }
    },
    created() {
        let response = this.$store.getters.getRegionSingle(this.$route.params.id);

        this.formData.name.value = response.name;
        this.formData.code.value = response.code;
    }
  }
</script>

<style scoped>

</style>