<template>
  <td :class="{
    'smart-table--cell': true,
    'smart-table--key': isTableKey,
    'smart-table--centeredCell': isCentered(cellValue.type)
  }">

    <!-- Inline heading (for mobile) -->
    <span class="smart-table--inlineHeading">
      {{ cellTitle | toTitleCase }}:
    </span>

    <!-- Render value as checkbox if boolean -->
    <input v-if="cellValue.type === Boolean.name"
           type="checkbox"
           :checked="cellValue.value"
           disabled>

    <!-- Render value as text if anything else -->
    <template v-else>
      {{getValue(cellValue.value, cellValue.type)}}
    </template>
  </td>
</template>

<script>
import { parseJsonDate } from "../global/mixins";

export default {
  name: "bit-table-cell",
  props: {
    cellValue: {
      type: Object,
      required: true
    },
    cellTitle: {
      type: String,
      required: true
    },
    isTableKey: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Returns true if value should be centered in the table.
     */
    isCentered(value) {
      return value === Number.name || value === Boolean.name;
    },
    /**
     * Parses the "cellValue" passed in if needed and returns the parsed or raw value
     */
    getValue(cellValue, type) {
      let parsedValue = parseJsonDate(cellValue);

      if (type === Date.name || parsedValue !== null) {
        let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return parsedValue.toLocaleDateString('en-us', options);
      } else {
        return cellValue;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/sass/global/mixins";
  @import "../../styles/sass/global/variables";
  @import "../../styles/sass/components/smart/table/smart-table";
</style>