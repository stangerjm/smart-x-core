<template>
    <section class="smart-tabs">
        <nav class="smart-tabs--nav">
            <ul class="smart-tabs--tabList">
                <li @click="switchTab" class="smart-tabs--tab smart-tabs--activeTab">Option 1</li>
                <li @click="switchTab" class="smart-tabs--tab">Option 2</li>
                <li @click="switchTab" class="smart-tabs--tab">Option 3</li>
                <li @click="switchTab" class="smart-tabs--tab">Option 4</li>
            </ul>
            <bit-btn class="smart-tabs--action" btn-style="add" :is-link="true">Add</bit-btn>
        </nav>
        <article class="smart-tabs--content">
            <p class="smart-tabs--default" v-if="!hasItems">Nothing to see here!</p>
            <div class="smart-tabs--item smart-tabs--activeItem">
                <smart-table default-context="/" :table-data="[{id: 1, name: 'James'}, {id: 2, name: 'Jenna'}]"></smart-table>
            </div>
            <div class="smart-tabs--item">
                <smart-table default-context="/" :table-data="[{id: 3, name: 'Joel'}, {id: 4, name: 'Joseph'}]"></smart-table>
            </div>
            <div class="smart-tabs--item">
                <smart-table default-context="/" :table-data="[{id: 5, name: 'Jacquie'}, {id: 6, name: 'Jessica'}]"></smart-table>
            </div>
            <div class="smart-tabs--item">
                <smart-table default-context="/" :table-data="[{id: 7, name: 'Jacob'}, {id: 8, name: 'Jared'}]"></smart-table>
            </div>
        </article>
    </section>
</template>

<script>
  import SmartTable from './smart-table';
  export default {
    name: "smart-tabs",
    components: {
      SmartTable
    },
    data() {
      return {
        hasItems: false
      }
    },
    methods: {
      switchTab(e) {
        let currentTab = e.target;

        if (currentTab.classList.contains('smart-tabs--activeTab')) {
          //don't switch tabs if the current tab is already active
          return;
        }

        //deactivate previously active tab
        this.deactivateItems('smart-tabs--activeTab');

        //activate current tab
        currentTab.classList.add('smart-tabs--activeTab');

        //look up index of current tab
        let tabList = [...currentTab.parentNode.children];
        let index = tabList.indexOf(currentTab);

        //deactivate previously active item
        this.deactivateItems('smart-tabs--activeItem');

        //find item at the same index as the current tab and activate it
        let contentNodes = this.$el.querySelectorAll('.smart-tabs--content > .smart-tabs--item');
        let contentList = [...contentNodes];
        contentList[index].classList.add('smart-tabs--activeItem');
      },
      deactivateItems(className) {
        let currentItems = this.$el.querySelectorAll(`.${className}`);
        currentItems.forEach(this.deactivateItem(className));
      },
      deactivateItem(className) {
        return (item) => {
          item.classList.remove(className);
        }
      }
    },
    mounted() {
      let contentItems = this.$el.querySelectorAll('.smart-tabs--content > .smart-tabs--item');
      if (contentItems.length > 0) {
        this.hasItems = true;
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../sass/global/variables";
    @import "../../sass/components/smart/tabs/smart-tabs";
</style>