<template>
  <pf-layout :menuList="MenusData" @tab-click="tabClick" @menu-open="menuOpen" @menu-close="menuClose" @logout="logout" @menu-click="menuClick">
    <div class="pf-main">
      <router-view v-slot="{ Component }">
        <!--离场无动画-->
        <transition mode="out-in" appear enter-active-class="animate__animated animate__fadeIn" leave-active-class="">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </pf-layout>
</template>

<script lang="ts">
import { MenusData } from "@/constants/menusData";

import { ElMessageBox } from "element-plus";
import { defineComponent } from "vue";
import { Crumb, ResponseCodeEnum, SysMenu, useAuth, useHttpClient } from "pf-component";
import { useNotice } from "@/components/element-plus/notice";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Main",
  setup() {
    const router = useRouter();
    const tabClick = (e: Crumb) => {
      router.push({ path: e.path });
    };
    const menuClick = (menu: SysMenu) => {
      console.log(menu);
      router.push({ path: menu.menuUrl });
    };
    const menuOpen = () => {
      console.log("menuopen.........");
    };
    const menuClose = () => {
      console.log("menu close.........");
    };
    const logout = () => {
      ElMessageBox.confirm("退出当前用户，是否确认？", { confirmButtonText: "确定", cancelButtonText: "取消", type: "warning" }).then(() => {
        /*点击确认*/
        useAuth()
          .logout()
          .then(res => {
            if (res) {
              window.location.reload();
            } else {
              useNotice().message.error("登出失败！");
            }
          });
      });
    };
    return {
      tabClick,
      logout,
      menuOpen,
      menuClose,
      menuClick,
      MenusData
    };
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-main {
    margin: 10px;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
}
</style>
