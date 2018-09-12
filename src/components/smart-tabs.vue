<template>
    <section class="smart-tabs">
        <nav class="smart-tabs--nav">
            <ul class="smart-tabs--tabList">
                <slot name="tab-list"></slot>
            </ul>
        </nav>
        <article class="smart-tabs--content">
            <slot name="tab-items"></slot>
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
    mounted() {
      let firstItem = this.$el.querySelector('.smart-tabs--item');
      firstItem.classList.add('smart-tabs--activeItem');

      let firstTab = this.$el.querySelector('.smart-tabs--tab');
      firstTab.classList.add('smart-tabs--activeTab');
    }
  }
</script>

<style scoped lang="scss">
    @import "../../styles/sass/global/variables";
    @import "../../styles/sass/config";
    @import "../../styles/sass/components/smart/tabs/smart-tabs";
</style>