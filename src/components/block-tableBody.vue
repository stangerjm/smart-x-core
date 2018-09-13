<template>
  <tbody>
  <tr class="smart-table--row" v-for="item in typedData">
    <!-- Render a cell for each item in the table data -->
    <bit-table-cell v-for="(key, index) in dataKeys"
                    :cell-value="item[key]"
                    :cell-title="key"
                    :is-table-key="index < 2">
    </bit-table-cell>

    <!-- Action container cell -->
    <td class="smart-table--cell">
      <block-action-container
          :default-ctx="defaultContext"
          :item-id="getItemId(item).value"
          :details-btn="allowDetails"
          :edit-btn="allowEdit"
          :delete-btn="allowDelete">
      </block-action-container>
    </td>

    <!-- Expand button (for mobile) -->
    <td class="smart-table--expand">
      <bit-btn btn-style="expand" @click.native="expandRecord"></bit-btn>
    </td>
  </tr>
  </tbody>
</template>

<script>
  export default {
    name: "block-table-body",
    components: {
      BitTableCell: () => import('./bit-tableCell'),
      blockActionContainer: () => import('./block-actionContainer')
    },
    props: {
      /**
       * Typed data to be rendered in the table.
       * @see {mixin} createSchema
       */
      typedData: {
        type: Array,
        required: true
      },
      /**
       * Keys to the "typedData" object
       * @see typedData
       */
      dataKeys: {
        type: Array,
        required: true
      },
      /**
       * Default context of the action container
       */
      defaultContext: {
        type: String,
        required: true
      },
      /**
       * Flag to optionally render details button
       */
      allowDetails: {
        type: Boolean,
        default: true
      },
      /**
       * Flag to optionally render edit button
       */
      allowEdit: {
        type: Boolean,
        default: true
      },
      /**
       * Flag to optionally render delete button
       */
      allowDelete: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      /**
       * Finds the id property of an item and returns it.
       * @param {object} item
       * @returns {string | number}
       */
      getItemId(item) {
        let keys = Object.keys(item);
        let idKey = keys.find(id => id.toLowerCase() === 'id' || id.toLowerCase() === '_id');
        return item[idKey];
      },
      /**
       * Expands record on mobile screen.
       * @param event
       */
      expandRecord(event) {
        let btn = event.target;
        let row = this.findAncestor(btn, 'smart-table--row');
        row.classList.toggle('record-is-expanded');
        /**
         * Emit to parent that a record has been expanded so parent can resize appropriately.
         * @event recordExpanded
         * @type null
         */
        this.$emit('recordExpanded');
      },
      /**
       * Finds the nearest ancestor that contains the specified class attribute.
       * @param el
       * @param classSelector
       * @returns {object}
       */
      findAncestor(el, classSelector) {
        while ((el = el.parentElement) && !el.classList.contains(classSelector)) ;
        return el;
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/sass/global/mixins";
  @import "../../styles/sass/global/variables";
  @import "../../styles/sass/components/smart/table/smart-table";
</style>