<template>
  <div class="pf-table-config">
    <h1>TableConfig</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PfLayout from "@/components/layout/PfLayout.vue";

export default defineComponent({
  name: "TableConfig",
  setup() {
    return {};
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-table-config {
    margin: 10px;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
}
</style>
