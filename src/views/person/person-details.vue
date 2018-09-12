<template>
    <div class="layout-subsection">
        <smart-details class="layout-subsection--main"
                       v-if="person"
                       :detail-data="person">
        </smart-details>
        <smart-tabs class="layout-subsection--footer">
          <template v-for="(person, title) in this.friends">
            <bit-tab slot="tab-list">{{title | toTitleCase }}</bit-tab>
            <block-tab-content slot="tab-items">
              <smart-table :table-data="person.friends" default-context="person"></smart-table>
            </block-tab-content>
          </template>
        </smart-tabs>
    </div>
</template>

<script>
  import SmartDetails from '../../components/smart-details';
  import SmartTabs from '../../components/smart-tabs';
  import { createNamespacedHelpers } from 'vuex';
  import BitTab from "../../components/bit-tab";
  import SmartTable from "../../components/smart-table";
  import BlockTabContent from "../../components/block-tabContent";

  const { mapGetters } = createNamespacedHelpers('people');

  export default {
    name: "person-details",
    components: {
      BlockTabContent,
      SmartTable,
      BitTab,
      SmartDetails,
      SmartTabs
    },
    data() {
      return {
        friends: {
          james: { friends: [{id: 1, name: 'James'}, {id: 2, name: 'Jenna'}] },
          joel: { friends: [{id: 3, name: 'Joel'}, {id: 4, name: 'Joseph'}] },
          jacquie: { friends: [{id: 5, name: 'Jacquie'}, {id: 6, name: 'Jessica'}] },
          jacob: { friends: [{id: 7, name: 'Jacob'}, {id: 8, name: 'Jared'}] },
          random: { friends: [{id: 9, name: 'Random'}, {id: 10, name: 'Person'}] },
          another: { friends: [{id: 11, name: 'Another'}, {id: 12, name: 'Person'}] },
          more: { friends: [{id: 13, name: 'More'}, {id: 14, name: 'People'}] }
        }
      }
    },
    computed: {
      ...mapGetters(['getPersonSingle']),
      person() {
        return this.getPersonSingle(this.$route.params.id);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../../styles/sass/layout/subsection/subsection";
</style>