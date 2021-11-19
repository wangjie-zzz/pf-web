<template>
  <div class="pf-callback">
    <div class="pf-flex pf-jc-center pf-mb-30">
      <img class="pf-vertical-middle" src="@/assets/images/logo.gif" />
      <span class="pf-fs-20 pf-lh-50 pf-ml-30 pf-nowrap">DCMS</span>
      <span v-if="logining">正在登录中.....</span>
      <span v-else>认证失败</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Constants } from "@/constants/constants";
import router from "@/router";
import { useNotice } from "@/components/element-plus/notice";
import { useAuth } from "pf-component";
export default defineComponent({
  name: "Callback",
  setup() {
    const logining = ref(true);
    const route = useRoute();
    const initToken = () => {
      if (route.query.code) {
        useAuth()
          .token(route.query)
          .then(res => {
            logining.value = false;
            if (res) {
              router.push(Constants.HOME_PAGE);
            } else {
              useNotice().message.error("获取token失败");
            }
          });
      } else {
        logining.value = false;
      }
    };
    onMounted(() => {
      initToken();
    });
    return {
      logining,
      initToken
    };
  }
});
</script>

<style scoped lang="scss">
.#{$prefix} {
  &-callback {
  }
}
</style>
