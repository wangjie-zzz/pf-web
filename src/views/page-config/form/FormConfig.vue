<template>
  <div class="pf-form-config">
    <h1>FormCOnfig</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PfLayout from "@/components/layout/PfLayout.vue";

export default defineComponent({
  name: "FormConfig",
  setup() {
    return {};
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-form-config {
    margin: 10px;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
}
</style>
