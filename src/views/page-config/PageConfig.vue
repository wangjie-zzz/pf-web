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
    margin: 10px;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
}
</style>
