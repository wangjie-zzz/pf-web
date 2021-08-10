<template>
  <h1>欢迎来到工作台！！！</h1>
  <el-button @click="menuList">menuList</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
export default defineComponent({
  name: "Workbench",
  setup() {
    const menuList = () => {
      clientService.general(systemApi.menuApi.list, undefined).then(res => {
        console.log(res);
      });
    };
    return {
      menuList
    };
  }
});
</script>

<style scoped lang="scss"></style>
