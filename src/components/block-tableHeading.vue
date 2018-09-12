<template>
  <thead>
    <tr class="smart-table--row smart-table--head">
      <th class="smart-table--heading smart-table--sortableHeading" v-for="heading in tableHeadings">
        <template v-if="!unsearchableHeadings.includes(heading)">
          <a class="smart-table--link" @click="sortMethod(heading)" :title="`Sort by ${heading}`">
            {{ heading | toTitleCase }}<bit-icon icon-type="sort"></bit-icon>
          </a>
        </template>
        <template v-else>
          {{ heading | toTitleCase }}
        </template>
      </th>
      <th class="smart-table--heading">Actions</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "block-table-heading",
  props: {
    /**
     * List of headings to be rendered
     */
    tableHeadings: {
      type: Array,
      required: true
    },
    /**
     * List of headings that should not trigger a search
     */
    unsearchableHeadings: {
      type: Array,
      default: () => []
    },
    /**
     * Method that should be called as a result of clicking a sortable heading
     */
    sortMethod: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/sass/global/mixins";
  @import "../../styles/sass/global/variables";
  @import "../../styles/sass/components/smart/table/smart-table";
</style>