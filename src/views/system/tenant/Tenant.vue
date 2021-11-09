<template>
  <div class="pf-dict pf-bgwhite pf-p-10">
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
      <el-form ref="tenForm" :config="formConfig" :model="formInfo"></el-form>
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
import { defineComponent, reactive, ref, Ref } from "vue";
import { useNotice } from "@/components/element-plus/notice";
import { tenantInfo } from "@/constants/data/table-data";
import { SysDict } from "@/model/SysDict";
import { useTenant } from "@/views/system/tenant/use-tenant";
import { dataService } from "@/services/data-service";
import { FormNameEnum } from "@/constants/enum/form-name.enum";
import { FormModel } from "@/model/entity/FormModel";

export default defineComponent({
  name: "Tenant",
  setup() {
    const { message } = useNotice();
    const dictConfig = tenantInfo();
    const dictData: Ref<any[]> = ref([]);

    const show: Ref<boolean> = ref(false);
    const formConfig: Ref<FormModel | undefined> = ref(undefined);
    const tenForm = ref(null);
    const formInfo: Ref<SysDict> = ref(null as any);
    dataService.getFormByName([{ name: FormNameEnum.tenantForm, config: formConfig, info: formInfo }]).then(res => {});

    const { list, update } = useTenant();
    const select = () => {
      list().then(res => {
        dictData.value = res;
      });
    };
    select();

    const create = () => {
      formInfo.value = dataService.toFormValue(formConfig as any);
      show.value = true;
    };
    const confirmCreate = () => {
      (tenForm.value as any).validate((val: boolean) => {
        if (val) {
          update(formInfo.value).then(res => {
            if (res) {
              show.value = false;
              select();
            }
          });
        }
      });
    };
    const del = () => {
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
      tenForm,
      formConfig,
      formInfo
    };
  }
});
</script>

<style scoped lang="scss"></style>
