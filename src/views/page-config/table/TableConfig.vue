<template>
  <div class="pf-table-config pf-bgwhite pf-p-10">
    <div class="pf-mt-20 pf-text-left">
      <el-button icon="el-icon-refresh" @click="select"></el-button>
      <el-button type="primary" @click="create">创建</el-button>
      <el-button @click="del">删除</el-button>
    </div>
    <el-table class="pf-mt-20" :config="dictConfig" :data="dictData">
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
    <el-dialog title="字典项" v-model="show">
      <el-form ref="dictForm" :config="formConfig" :model="formInfo"></el-form>
      <template #footer>
        <div class="pf-text-right">
          <el-button type="primary" @click="confirmCreate">确认</el-button>
          <el-button @click="show = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useNotice } from "@/components/element-plus/notice";
import { sysDict } from "@/constants/data/table-data";
import { SysDict } from "@/model/SysDict";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import { emptyForm, FormModel } from "@/model/entity/FormModel";
import { dataService } from "@/services/data-service";
import { FormNameEnum } from "@/constants/enum/form-name.enum";

export default defineComponent({
  name: "TableConfig",
  setup() {
    const { message, loading } = useNotice();
    const dictConfig = sysDict();
    const dictData: Ref<SysDict[]> = ref([]);

    const show: Ref<boolean> = ref(false);
    const formConfig: Ref<FormModel> = ref(emptyForm);
    const formInfo: Ref<SysDict> = ref(null as any);
    const dictForm = ref(null);
    dataService
      .getFormByName([
        {
          name: FormNameEnum.sysDictForm,
          config: formConfig,
          info: formInfo
        }
      ])
      .then(res => {});

    const select = () => {
      loading.open();
      clientService.general<SysDict[]>(systemApi.dictApi.list).then(res => {
        loading.close();
        if (res.code === Constants.CODE.SUCCESS) {
          dictData.value = res.data;
        } else {
          message.error(res.message);
        }
      });
    };
    select();
    const create = () => {
      formInfo.value = dataService.toFormValue(formConfig as any);
      show.value = true;
    };
    const confirmCreate = () => {
      (dictForm.value as any).validate((val: boolean) => {
        if (val) {
          loading.open();
          clientService.general(systemApi.dictApi.update, undefined, formInfo.value).then(res => {
            loading.close();
            if (res.code === Constants.CODE.SUCCESS) {
              show.value = false;
              select();
            } else {
              message.error(res.message);
            }
          });
        }
      });
    };
    const del = () => {
      // systemApi.dictApi.delete
      message.error("待完善");
    };
    const handleClick = (data: SysDict, cmd: string) => {
      switch (cmd) {
        case "edit":
          formInfo.value = data;
          show.value = true;
          break;
        default:
          message.error("未定义的操作！");
      }
    };
    return {
      select,
      dictData,
      dictConfig,
      handleClick,
      create,
      confirmCreate,
      del,
      show,
      dictForm,
      formConfig,
      formInfo
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
