<template>
  <div>
    <h1>欢迎来到工作台！！！</h1>
    <el-button @click="menuList">roleList</el-button>
    <el-button @click="access">access auth</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useAuth, useHttpClient } from "pf-component";
import { systemApi } from "@/constants/api/system-api";
export default defineComponent({
  name: "Workbench",
  setup() {
    const { general } = useHttpClient();
    const { refreshToken } = useAuth();
    const menuList = () => {
      general(systemApi.roleApi.list, undefined).then(res => {
        console.log(res);
      });
    };
    const access = () => {
      refreshToken().then(res => {
        console.log(res);
      });
    };
    return {
      menuList,
      access
    };
  }
});
</script>

<style scoped lang="scss"></style>
