<template>
  <li class="smart-tabs--tab" @click="switchTab"><slot></slot></li>
</template>

<script>
export default {
  name: "bit-tab",
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
      let contentNodes = document.querySelectorAll('.smart-tabs--content > .smart-tabs--item');
      let contentList = [...contentNodes];
      contentList[index].classList.add('smart-tabs--activeItem');
    },
    deactivateItems(className) {
      let currentItems = document.querySelectorAll(`.${className}`);
      currentItems.forEach(this.deactivateItem(className));
    },
    deactivateItem(className) {
      return (item) => {
        item.classList.remove(className);
      }
    }
  }
}
</script>

<style scoped>

</style>