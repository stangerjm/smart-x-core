<template>
  <div class="layout-grid layout-main">
    <header class="layout-main--nav">
      <slot name="header"></slot>
    </header>
    <section class="layout-main--search">
      <slot name="search"></slot>
    </section>
    <main class="layout-main--content">
      <slot name="content"></slot>
    </main>
    <footer class="layout-main--footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "layout-grid"
  }
</script>

<style scoped lang="scss">
  @import "../../styles/sass/layout/grid/grid";
</style>