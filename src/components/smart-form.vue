<template>
    <form class="smart-form">
        <header class="smart-form--titleSection" v-if="formTitle">
            <h3 class="smart-form--title">{{formTitle}}</h3>
        </header>
        <section class="smart-form--fieldSection">
            <slot></slot>
            <template v-for="(item, key) in masterData">
                <input v-if="key.toLowerCase() === 'id'"
                       :name="key"
                       type="hidden"
                       v-model="item.value">
                <bit-input class="smart-form--field"
                           v-else-if="isValidField(item, key)"
                           :stack-elements="true"
                           :input-name="key"
                           :input-type="getType(item)"
                           :label-text="formatFromCamelCase(key)"
                           :readonly="readonlyInputs.includes(key)"
                           v-model="item.value">
                </bit-input>
            </template>
            <bit-btn @click.native="submit">Submit</bit-btn>
        </section>
    </form>
</template>

<script>
  import { EventBus } from '../global/event-bus';
  import { parseJsonDate } from '../global/mixins';

  /**
   * A component that renders a dynamic form based on a model.
   * @author James Stanger, Washington State Patrol
   * @version 1.0
   */
  export default {
    name: "smart-form",
    data() {
      return {
        /**
         * Will contain a non-reactive copy of the data when the component is created.
         */
        masterData: this.formData,
        action: this.formAction
      }
    },
    props: {
      /**
       * Corresponds to the native HTML attribute "action"
       */
      formAction: {
        type: String,
        default: '/'
      },
      onSubmit: {
        type: Function,
        required: true
      },
      /**
       * The model that the form should use as a template.
       */
      formData: {
        type: Object,
        default: () => { }
      },
      /**
       * A list of inputs that should be readonly.
       */
      readonlyInputs: {
        type: Array,
        default: () => []
      },
      /**
       * A list of inputs that should be required.
       */
      requiredInputs: {
        type: Array,
        default: () => []
      },
      ignoreFields: {
        type: Array,
        default: () => []
      },
      /**
       * A title that will display at the top of the form.
       */
      formTitle: {
        type: String
      },
      /**
       * Corresponds to the native HTML attribute "method"
       */
      formMethod: {
        type: String
      },
      /**
       * An optional format for the date-picker input field to use.
       */
      dateFormat: {
        type: String,
        default: 'MM-dd-yyyy'
      }
    },
    methods: {
      /**
       * Gets the appropriate input type depending on the value's data type.
       * @param value
       * @returns {string}
       */
      getType: function(item) {
        let type = item.type.name;
        switch(type) {
          case 'Boolean':
            return 'checkbox';
          case 'Number':
            return 'number';
          case 'Date':
            return 'date';
          default:
            return 'text';
        }
      },
      determineIsEmpty: function (value) {
        if (!value || value === null) {
          return false;
        }

        return value !== 0 && value.toString() !== new Date('1/1/0001').toString();
      },
      isValidField: function (item, key) {
        return (!Array.isArray(item) && !this.ignoreFields.includes(key));
      },
      setRequiredInputs: function () {
        for (let requiredInput of this.requiredInputs) {
          let domInput;

          if (this.getType(this.masterData[requiredInput]) === 'date') {
            domInput = this.$el.querySelector('.el-date-editor > input[name=' + requiredInput + ']');
          } else {
            domInput = this.$el.querySelector('input[name=' + requiredInput + ']');
          }

          if (domInput !== null) {
            domInput.required = true;
          }
        }
      },
      mountModel: function () {
        let model = this.masterData;

        for (let prop in model) {
          let jsonDate = parseJsonDate(model[prop]);
          if (jsonDate !== null) {
            model[prop] = jsonDate.toString();
          }
        }
      },
      submit() {
        this.onSubmit(this.masterData);
      }
    },
    /**
     * Loop through the properties in the model and replace all of the dates with the expected format.
     */
    created: function () {
      if (this.masterData) {
        this.mountModel();
      }

      //Set up event listener for the modal recieving data
      EventBus.$on('modal-data-received', (payload) => {
        this.masterData = payload.data;
        this.action = payload.path;
        this.mountModel();

        for (let value of Object.values(payload.data)) {
          if (Array.isArray(value)) {
            EventBus.$emit('form-data-updated', value);
          }
        }
      });

      EventBus.$on('modal-closed', () => {
        this.masterData = {};
      });
    },
    /**
     * Set each input specified in the requiredInputs array to have the native HTML attribute "required"
     */
    updated: function() {
      this.setRequiredInputs();
    }
  }
</script>

<style scoped lang="scss">
    @import "../../sass/global/variables";
    @import "../../sass/components/smart/form/smart-form";
</style>