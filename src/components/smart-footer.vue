<template>
    <footer class="smart-footer">
        <slot name="footer"></slot>
        <p>&copy; {{currentYear}} Washington State Patrol</p>
    </footer>
</template>

<script>
  export default {
    name: "smart-footer",
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../styles/sass/global/variables";
    @import "../../styles/sass/config";
    @import "../../styles/sass/components/smart/footer/smart-footer";
</style>