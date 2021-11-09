<template>
  <div class="pf-page-config">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "PageConfig"
};
</script>

<style scoped lang="scss">
.#{$prefix} {
  &-page-config {
  }
}
</style>
