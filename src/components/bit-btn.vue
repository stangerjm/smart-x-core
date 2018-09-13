<template>

  <!-- Render as a link -->
  <a :class="btnClass" :href="path" v-if="isLink">
    <!-- @slot Link text -->
    <slot></slot>
  </a>

  <!-- Render as a button -->
  <button type="button" :class="btnClass" v-else>
    <!-- @slot Button text -->
    <slot></slot>
  </button>
</template>

<script>
  /**
   * A dynamic button that can be used as an various types of buttons and links.
   * @author James Stanger, Washington State Patrol
   * @version 1.0
   */
  export default {
    name: 'bit-btn',
    props: {
      /**
       * Button style options include:
       * `add, datepicker, delete, details, edit, exit, expand, plainExit, plainSearch, reset, search`
       */
      btnStyle: {
        type: String
      },
      /**
       * Renders the button as a link if set to true
       */
      isLink: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        /**
         * Class attribute for the button or link
         */
        btnClass: `bit-btn ${this.getClass(this.btnStyle)}`,
        defaultClass: 'bit-btn-clickable',
        buttonTypes: ['add', 'exit', 'expand', 'reset', 'search']
      }
    },
    methods: {
      /**
       * Returns the correct class for the string passed into the btnStyle property
       * @param {string} type - button style
       */
      getClass: function (type) {
        if (type == null) {
          return this.defaultClass;
        }

        if (this.buttonTypes.includes(type)) {
          return `bit-btn-${type}`;
        }

        return this.defaultClass;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/sass/global/variables";
  @import "../../styles/sass/global/mixins";
  @import "../../styles/sass/components/bit/btn/bit-btn";
</style>