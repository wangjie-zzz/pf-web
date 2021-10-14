<template>
  <router-view />
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  reactive,
  Ref,
  ref,
  provide,
  watch
} from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from "vue-router";
import { Crumb } from "@/model/Crumb";
import { menusService } from "@/components/menu/menus-service";

export default defineComponent({
  props: {},
  setup() {
    onBeforeMount(() => {
      console.log("Component is onBeforeMount!");
    });
    onMounted(() => {
      console.log("Component is mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Component is onBeforeUpdate!");
    });
    onUpdated(() => {
      console.log("Component is onUpdated!");
    });
    onBeforeUnmount(() => {
      console.log("Component is onBeforeUnmount!");
    });
    onUnmounted(() => {
      console.log("Component is onUnmounted!");
    });
    onErrorCaptured(() => {
      console.log("Component is onErrorCaptured!");
    });
    onRenderTracked(() => {
      console.log("Component is onRenderTracked!");
    });
    onRenderTriggered(() => {
      console.log("Component is onRenderTriggered!");
    });
    onBeforeRouteLeave((to, from) => {
      console.log("onBeforeRouteLeave", to, from);
      return true;
    });
    onBeforeRouteUpdate(async (to, from) => {
      console.log("onBeforeRouteUpdate", to, from);
    });
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
        activeCrumb.value = route.fullPath;
        activeMenuId.value = menuId;
      }
    );
    return {};
  }
});
</script>
