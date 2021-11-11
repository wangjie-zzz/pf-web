<template>
  <div class="pf-table-config pf-bgwhite pf-p-10">
    <div class="pf-mt-20 pf-text-left">
      <el-button icon="el-icon-refresh" @click="select"></el-button>
      <el-button type="primary" @click="create">创建</el-button>
      <!--      <el-button type="primary" @click="setCache">重置缓存</el-button>-->
      <el-button @click="del">删除</el-button>
      <!--      <el-button @click="initData">init</el-button>-->
    </div>
    <el-table class="pf-mt-20" :config="formConfig" :data="formList">
      <el-table-column label="操作" fixed="right" width="80">
        <template #default="scope">
          <el-tooltip effect="light" placement="left" trigger="hover">
            <i class="pf-fs-18 el-icon-menu el-button--text"></i>
            <template #content>
              <div class="pf-flex pf-flex-column pf-flex-0">
                <el-button @click="handleClick(scope.row, 'edit')" type="text" size="mini">编辑</el-button>
              </div>
            </template>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useNotice } from "@/components/element-plus/notice";
import { sysForm } from "@/constants/data/table-data";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import { authService } from "@/services/auth-service";
import router from "@/router";
// import { init } from "@/views/page-config/form/init-basedata";
import { FormModel } from "@/model/entity/FormModel";

export default defineComponent({
  name: "TableConfig",
  setup() {
    const { message } = useNotice();
    const formConfig = sysForm().checkbox();
    const formList: Ref<any[]> = ref([]);
    const show: Ref<boolean> = ref(false);
    const select = () => {
      clientService.general<any[]>(systemApi.formConfigApi.list).then(res => {
        if (res.code === Constants.CODE.SUCCESS) {
          formList.value = res.data;
        } else {
          message.error(res.message);
        }
      });
    };
    select();
    /*const setCache = () => {
    };*/
    const create = () => {
      router.push({ name: "CreateTableConfig" });
    };
    const del = () => {
      // systemApi.dictApi.delete
      // TODO
      message.error("待完善");
    };
    const handleClick = (data: FormModel, cmd: string) => {
      switch (cmd) {
        case "edit":
          if (data.name) {
            router.push({ name: "CreateTableConfig", params: { name: data.name } });
          }
          break;
        case "preview":
          break;
        default:
          message.error("未定义的操作！");
      }
    };
    /*const initData = () => {
      init();
    };*/
    return {
      select,
      formList,
      formConfig,
      handleClick,
      create,
      del,
      // setCache,
      show
      // initData
    };
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-table-config {
  }
}
</style>
