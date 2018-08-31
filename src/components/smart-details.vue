<template>
    <div class="smart-details-outlined">
        <header class="smart-details--header">
            <h3 class="smart-details--heading">{{title ? title : 'Details'}}</h3>
        </header>
        <div class="smart-details--listContainer">
            <dl v-for="column in detailColumns" class="smart-details--list">
                <div v-for="[key, detail] in column" class="smart-details--detail">
                    <dt class="smart-details--detailKey">{{formatFromCamelCase(key)}}</dt>
                    <dd class="smart-details--detailValue" v-if="detail.type !== Boolean.name">{{getValue(detail.value)}}</dd>
                    <dd class="smart-details--detailValue" v-else><input type="checkbox" :checked="detail.value" disabled></dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
  import { parseJsonDate } from '../global/mixins';

  /**
   * A component that renders a model as a list of details.
   * @author James Stanger, Washington State Patrol
   * @version 1.0
   */
  export default {
    name: "smart-details",
    props: {
      /**
       * The object that will be displayed as a list of properties.
       */
      detailData: {
        type: Object,
        required: true
      },
      /**
       * The title to display before the details list.
       */
      title: {
        type: String
      },
      /**
       * Number indicating how many details should display before forcing the next details to the next column.
       */
      detailsPerColumn: {
        type: Number,
        default: 8
      }
    },
    data() {
      return {
        detailColumns: []
      }
    },
    methods: {
      getValue: function(detail) {
        let detailValue = parseJsonDate(detail);
        if (detailValue !== null) {
            let options = {year: 'numeric', month: '2-digit', day: '2-digit'};
            return detailValue.toLocaleDateString('en-us', options);
        } else {
          return detail;
        }
      },
      isObjectOrArray(type) {
        return  type === Array.name && type === Object.name;
      },
      isHiddenField(value) {
        return !value.startsWith('_');
      },
      splitArrayIntoChunks(array, chunks) {
        //Create an array with the number of chunks required
        return Array(Math.ceil(array.length / chunks))
          //Fill the array with any value (no arguments will just fill with 'undefined')
          .fill()
          //Use Array.prototype.map to fill each chunk with the correct number of values from the original array
          .map((_, idx) => {
            const start = idx * chunks;
            let end = start + chunks;
            return array.slice(start, end);
          });
      }
    },
    /**
     * Filter out associated records and break main details object into objects representing columns.
     */
    created: function() {
      const details = Object.entries(this.detailData);

      const filterOutOfScopeData = item => {
        let [key, value] = item;
        if (!this.isObjectOrArray(value.type)) {
          return this.isHiddenField(key);
        }

        return false;
      };

      let filteredEntries = details
        .filter(filterOutOfScopeData);

      this.detailColumns = this.splitArrayIntoChunks(filteredEntries, this.detailsPerColumn);
    }
  }
</script>

<style scoped lang="scss">
    @import "../../styles/sass/global/variables";
    @import "../../styles/sass/global/mixins";
    @import "../../styles/sass/components/smart/details/smart-details";
</style>