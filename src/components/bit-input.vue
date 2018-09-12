<template>
    <div :class="[stackElements ? 'bit-input-stacked' : 'bit-input']">
        <template v-if="inputType === 'checkbox'">
            <label class="bit-input--label" :for="inputName">{{labelText}}</label>
            <input class="bit-input--field"
                   :id="inputName"
                   :type="inputType"
                   :name="inputName"
                   :checked="checked"
                   @change="updateCheckbox"
                   v-bind="$attrs">
            <input type="hidden" value="false" :name="inputName">
        </template>
        <template v-else-if="inputType !== 'date'">
            <label class="bit-input--label" :for="inputId ? inputId : randomId">{{labelText}}</label>
            <input class="bit-input--field"
                   :id="inputId ? inputId : randomId"
                   :value="value"
                   :name="inputName"
                   @input="$emit('input', $event.target.value)"
                   v-bind="$attrs"
                   :type="inputType">
        </template>
        <template v-else>
            <label class="bit-input--label" :for="inputId ? inputId : randomId">{{labelText}}</label>
            <flat-pickr class="bit-input--field bit-input--date"
                        :id="inputId ? inputId : randomId"
                        :name="inputName"
                        v-bind="$attrs"
                        :value="value"
                        @input="$emit('input', $event)"
                        :config="config">
            </flat-pickr>
        </template>
    </div>
</template>

<script>
  import 'flatpickr/dist/flatpickr.css';

  /**
   * A component that can be rendered as a text, number, or datepicker input.
   * @author James Stanger, Washington State Patrol
   * @version 1.0
   */
  export default {
    name: "bit-input",
    components: {
      flatPickr: () => import('vue-flatpickr-component')
    },
    props: {
      /**
       * Corresponds to the native HTML input attribute "type"
       */
      inputType: {
        type: String,
        required: true
      },
      /**
       * Display text for the related input label
       */
      labelText: {
        type: String,
        required: true
      },
      /**
       * Corresponds to the native HTML input attribute "name"
       */
      inputName: {
        type: String,
        required: true
      },
      /**
       * Flag to have input and label stack horizontally if set to true
       */
      stackElements: {
        type: Boolean,
        default: false
      },
      /**
       * Corresponds to the native HTML input attribute "id"
       */
      inputId: {
        type: String
      },
      /**
       * Allows v-model to return the altered input value
       */
      value: {}
    },
    data() {
      return {
        randomId: 'input-' + Math.random().toString(36).substr(2, 9),
        config: {
          allowInput: true,
          dateFormat: 'm-d-Y',
          minDate: '01/01/1900',
          maxDate: '12/31/2099'
        },
        checked: this.value
      }
    },
    methods: {
      updateCheckbox() {
        this.checked = !this.checked;
        this.$emit('input', this.checked);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../styles/sass/global/variables";
    @import "../../styles/sass/global/mixins";
    @import "../../styles/sass/components/bit/input/bit-input";
</style>