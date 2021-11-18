<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref, provide, watch } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from "vue-router";
import { Crumb } from "@/model/Crumb";
import { menusService } from "@/components/menu/menus-service";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  props: {},
  components: {
    ElConfigProvider
  },
  setup() {
    const route = useRoute();
    const crumbs: Crumb[] = reactive([]);
    const activeCrumb: Ref<string> = ref("");
    const activeMenuId: Ref<string> = ref(menusService.menus[0].menuId);
    provide("crumbs", crumbs);
    provide("activeCrumb", activeCrumb);
    provide("activeMenuId", activeMenuId);
    watch(
      () => route.name,
      () => {
        const menuId = menusService.refreshCrumbs(route, crumbs);
        // 跳转的路由：不是菜单 && 没有meta信息则不加到crumbs
        if (menuId) {
          activeCrumb.value = route.fullPath;
          activeMenuId.value = menuId;
        }
      }
    );
    return {
      locale: zhCn
    };
  }
});
</script>
