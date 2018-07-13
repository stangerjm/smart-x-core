<template>
    <div class="block-navList">
        <div class="block-navList--expand" @click="isExpanded = !isExpanded">
            <div class="block-navList--expandLine"></div>
            <div class="block-navList--expandLine"></div>
            <div class="block-navList--expandLine"></div>
        </div>
        <ul :class="[isExpanded ? 'nav-show' : '', 'block-navList--list']">
            <li class="block-navList--item" v-for="item in listItems">
                <router-link :to="item.linkPath" :class="['bit-link', hasSubitems(item) ? 'block-navList--sublistHeading' : '']">{{item.itemTitle}}</router-link>
                <bit-drop-list v-if="hasSubitems(item)" :drop-items="item.inlineItems"></bit-drop-list>
            </li>
        </ul>
    </div>
</template>

<script>
  /**
   * A component that renders a flexible and mobile responsive list with drop-down capability.
   * @author James Stanger
   * @version 1.0
   */
  export default {
    name: "block-nav-list",
    props: {
      /**
       * An array containing the items and subsequent drop-down items to render.
       */
      listItems: {
        type: Array,
        required: true
      }
    },
    components: {
      bitDropList: () => import('./bit-dropList')
    },
    data: function () {
      return {
        isExpanded: false
      }
    },
    methods: {
      hasSubitems: function(item) {
        return item.inlineItems;
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../sass/global/variables";
    @import "../../sass/global/mixins";
    @import "../../sass/components/bit/link/bit-link";
    @import "../../sass/components/block/navList/block-navList";
</style>