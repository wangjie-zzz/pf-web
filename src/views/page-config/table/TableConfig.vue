<template>
  <div class="pf-table-config pf-bgwhite pf-p-10">
    <div class="pf-mt-20 pf-text-left">
      <el-button icon="el-icon-refresh" @click="select"></el-button>
      <el-button type="primary" @click="create">创建</el-button>
      <!--      <el-button type="primary" @click="setCache">重置缓存</el-button>-->
      <el-button @click="del">删除</el-button>
      <!--      <el-button @click="initData">init</el-button>-->
    </div>
    <el-table class="pf-mt-20" :config="tableConfig" :data="tableList">
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
import { defineComponent, onMounted, Ref, ref } from "vue";
import { useNotice } from "@/components/element-plus/notice";
import { systemApi } from "@/constants/api/system-api";
import router from "@/router";
import { useData, FormModel, emptyTable, TableModel, ResponseCodeEnum } from "pf-component";
import { TableNameEnum } from "@/constants/enum/table-name.enum";
import { useHttpClient } from "pf-component";
// import { init } from "@/views/page-config/test/init-basedata";

export default defineComponent({
  name: "TableConfig",
  setup() {
    onMounted(() => {
      useData()
        .loadTable([{ name: TableNameEnum.sysTable, config: tableConfig }])
        .then(res => {
          if (res) {
            tableConfig.value.checkbox();
            select();
          }
        });
    });
    const { message } = useNotice();
    const tableConfig: Ref<TableModel> = ref(emptyTable);
    const tableList: Ref<any[]> = ref([]);
    const show: Ref<boolean> = ref(false);
    const select = () => {
      useHttpClient()
        .general<any[]>(systemApi.tableConfigApi.list)
        .then(res => {
          if (res.code === ResponseCodeEnum.SUCCESS) {
            tableList.value = res.data;
          } else {
            message.error(res.message);
          }
        });
    };
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
      tableList,
      tableConfig,
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
