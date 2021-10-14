<template>
  <div class="pf-metadata-config">
    <h1>MetadataConfig</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PfLayout from "@/components/layout/PfLayout.vue";

export default defineComponent({
  name: "MetadataConfig",
  setup() {
    return {};
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-metadata-config {
    margin: 10px;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
}
</style>
