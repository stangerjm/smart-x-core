<template>
    <section class="smart-tabs">
        <nav class="smart-tabs--nav">
            <ul class="smart-tabs--tabList">
                <li @click="testing" class="smart-tabs--tab smart-tabs--activeTab">Option 1</li>
                <li @click="testing" class="smart-tabs--tab">Option 2</li>
            </ul>
            <bit-btn class="smart-tabs--action" btn-style="add" :is-link="true">Add</bit-btn>
        </nav>
        <article class="smart-tabs--content">
            <p class="smart-tabs--default">Nothing to see here!</p>
            <div class="smart-tabs--item smart-tabs--activeItem">
                <smart-table default-context="/" :table-data="[{id: 1, name: 'James'}, {id: 2, name: 'Jenna'}]"></smart-table>
            </div>
            <div class="smart-tabs--item">
                <smart-table default-context="/" :table-data="[{id: 3, name: 'Joel'}, {id: 4, name: 'Joseph'}]"></smart-table>
            </div>
        </article>
    </section>
</template>

<script>
  import SmartTable from './smart-table';
  export default {
    name: "test",
    components: {
      SmartTable
    },
    methods: {
      testing(e) {
        let currentTab = e.target;
        let list = Array.prototype.slice.call(currentTab.parentNode.children);
        let index = list.indexOf(currentTab);

        let currentActiveItems = this.$el.querySelectorAll('.smart-tabs--activeItem');
        currentActiveItems.forEach((activeItem) => {
          activeItem.classList.remove('smart-tabs--activeItem');
        });

        let content = this.$el.querySelector(`.smart-tabs--content > .smart-tabs--item:nth-child(${ index + 2 })`);
        content.classList.add('smart-tabs--activeItem');
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../sass/global/variables";

    .smart-tabs {}

    .smart-tabs--nav {
        display: flex;
        justify-content: space-between;
    }

    .smart-tabs--tabList {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .smart-tabs--tab {
        padding: 10px 40px;
        margin-right: 3px;
        background: lighten($theme-generic, 10%);
        border-radius: 5px 5px 0  0;

        &:hover {
            background: lighten($theme-generic, 5%);
            cursor: pointer;
        }
    }

    .smart-tabs--action {
        align-self: center;
        margin: 5px;
    }

    .smart-tabs--content {
        padding: 10px;
        background: $theme-generic;
    }

    .smart-tabs--item {
        display: none;
    }

    .smart-tabs--default {}

    .smart-tabs--activeItem {
        display: block;
    }

    .smart-tabs--activeTab {
        background: $theme-generic;
    }
</style>