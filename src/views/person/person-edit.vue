<template>
    <div>
        <smart-form form-title="Edit"
                    :form-data="getPersonSingle($route.params.id)"
                    :on-submit="submit"></smart-form>
    </div>
</template>

<script>
  import SmartForm from '../../components/smart-form';
  import { mapGetters } from 'vuex';

  export default {
    name: "person-edit",
    components: {
      SmartForm
    },
    computed: {
      ...mapGetters(['getPersonSingle'])
    },
    methods: {
      async submit(formData) {
        await this.$store.dispatch('editPerson', { person: formData, id: this.$route.params.id});
        this.$router.push('/person');
      }
    }
  }
</script>

<style scoped>

</style>