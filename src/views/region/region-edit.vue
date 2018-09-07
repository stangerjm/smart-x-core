<template>
    <div>
        <smart-form form-title="Edit"
                    :form-data="getRegionSingle(this.routeId)"
                    :on-submit="submit"></smart-form>
    </div>
</template>

<script>
  import SmartForm from "../../components/smart-form";
  import { mapGetters } from 'vuex';

  export default {
    name: "region-edit",
    components: {
      SmartForm
    },
    computed: {
      ...mapGetters(['getRegionSingle']),
      routeId() {
        return this.$route.params.id
      }
    },
    methods: {
      async submit(submittedData) {
        await this.$store.dispatch('editRegion', { region: submittedData, id: this.routeId });
        this.$router.push('/region');
      }
    }
  }
</script>

<style scoped>

</style>