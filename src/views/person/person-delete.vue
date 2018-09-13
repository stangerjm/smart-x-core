<template>
    <div v-if="person">
        <h1>Delete this record?</h1>
        <smart-details :detail-data="person"></smart-details>
        <bit-btn @click.native="deleteRecord">Delete</bit-btn>
    </div>
</template>

<script>
  import SmartDetails from '../../components/smart-details';
  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters, mapActions } = createNamespacedHelpers('people');

  export default {
    name: "person-delete",
    components: {
      SmartDetails
    },
    computed: {
      ...mapGetters(['getPersonSingle']),
      person() {
        return this.getPersonSingle(this.$route.params.id);
      }
    },
    methods: {
      ...mapActions(['deletePerson']),
      async deleteRecord() {
        await this.deletePerson({ id: this.$route.params.id });
        this.$router.push('/person');
      }
    }
  }
</script>

<style scoped>

</style>