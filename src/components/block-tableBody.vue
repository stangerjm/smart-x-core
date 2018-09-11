<template>
  <tbody>
    <tr class="smart-table--row" v-for="item in typedData">
      <td v-for="(key, index) in dataKeys"
          :class="{
            'smart-table--cell': true,
            'smart-table--key': index < 2,
            'smart-table--centeredCell': isCentered(item[key].type)
          }">
        <span class="smart-table--inlineHeading">
            {{formatFromCamelCase(key)}}:
        </span>
        <template v-if="item[key].type === Boolean.name">
          <input type="checkbox" :checked="item[key]" disabled>
        </template>
        <template v-else>
          {{getValue(item[key].value)}}
        </template>
      </td>
      <td class="smart-table--cell">
        <block-action-container
            :default-ctx="defaultContext"
            :item-id="getItemId(item).value"
            :details-btn="allowDetails"
            :edit-btn="allowEdit"
            :delete-btn="allowDelete">
        </block-action-container>
      </td>
      <td class="smart-table--expand">
        <bit-btn btn-style="expand" @click.native="expandRecord"></bit-btn>
      </td>
    </tr>
  </tbody>
</template>

<script>
  import { parseJsonDate } from "../global/mixins";
  export default {
    name: "block-table-body",
    components: {
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
      isCentered(value) {
        return value === Number.name || value === Boolean.name;
      },
      getValue(detail) {
        let detailValue = parseJsonDate(detail);
        if (detailValue !== null) {
          let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          return detailValue.toLocaleDateString('en-us', options);
        } else {
          return detail;
        }
      },
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
      findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
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