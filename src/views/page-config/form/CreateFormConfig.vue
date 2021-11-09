<template>
  <pf-main :title="'创建表单'">
    <div class="pf-mt-20">
      <el-form ref="formFDom" :config="formFConfig" :model="formInfo"></el-form>
    </div>
    <div class="pf-text-right pf-mr-20">
      <el-button icon="el-icon-refresh" v-if="isSave" @click="refresh"></el-button>
      <el-button type="primary" v-if="!isSave" @click="saveForm">保存</el-button>
      <el-button type="primary" v-if="isSave" @click="create">创建</el-button>
      <el-button type="primary" v-if="isSave" @click="importDB">导入数据表</el-button>
      <el-button v-if="isSave" @click="del">删除</el-button>
      <el-button type="primary" v-if="isSave" @click="setCache">重置缓存</el-button>
      <el-button type="primary" v-if="isSave" @click="preview">预览</el-button>
    </div>
    <el-table class="pf-mt-20" :config="fieldTConfig" :data="fieldList">
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
    <el-dialog title="表单项" v-model="show">
      <el-form ref="fieldFDom" :config="fieldFConfig" :model="fieldInfo" :col-count="3"></el-form>
      <template #footer>
        <div class="pf-text-right">
          <el-button type="primary" @click="confirmCreate">确认</el-button>
          <el-button @click="show = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog title="表单预览" v-model="previewShow">
      <el-form ref="fieldFDom" :config="previewFormConfig" :model="previewInfo" :col-count="3"></el-form>
      <template #footer>
        <div class="pf-text-right">
          <el-button type="primary" @click="previewOver">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </pf-main>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useNotice } from "@/components/element-plus/notice";
import { sysFormField } from "@/constants/data/table-data";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import PfMain from "@/components/layout/PfMain.vue";
import { useRoute } from "vue-router";
import { useDict } from "@/constants/util/dict-convert";
import { FormModel } from "@/model/entity/FormModel";
import { SysFormInfo } from "@/model/entity/SysFormInfo";
import { dataService } from "@/services/data-service";
import { FormNameEnum } from "@/constants/enum/form-name.enum";
import { SysFormField } from "@/model/entity/SysFormField";
import { copy } from "@/constants/util/objects-utils";

export default defineComponent({
  name: "CreateFormConfig",
  components: { PfMain },
  setup() {
    const route = useRoute();
    const { convertAllOptions } = useDict();
    const { message, loading } = useNotice();

    const isSave: Ref<boolean> = ref(false);
    const formFDom = ref(null);
    const formFConfig: Ref<FormModel | undefined> = ref(undefined);
    const formInfo: Ref<SysFormInfo> = ref(null as any);

    const show: Ref<boolean> = ref(false);
    const fieldFDom = ref(null);
    const fieldFConfig: Ref<FormModel | undefined> = ref(undefined);
    const fieldInfo: Ref<SysFormField> = ref(null as any);
    const params = [
      {
        name: FormNameEnum.sysFieldForm,
        config: fieldFConfig,
        info: fieldInfo
      },
      {
        name: FormNameEnum.sysFormForm,
        config: formFConfig,
        info: formInfo
      }
    ];
    dataService.getFormByName(params).then(res => {
      if (res) {
        fieldFConfig.value?.setOptions("dict", convertAllOptions());
        console.log(formInfo.value);
      }
    });

    const fieldTConfig = sysFormField();
    const fieldList: Ref<SysFormField[]> = ref([]);

    const previewShow: Ref<boolean> = ref(false);
    const previewFormConfig: Ref<FormModel> = ref({} as FormModel);
    const previewInfo: Ref<any> = ref(null);
    const init = (name: string) => {
      loading.open();
      clientService
        .general<any>(systemApi.formConfigApi.formInfo, { name })
        .then(res => {
          loading.close();
          if (res.code === Constants.CODE.SUCCESS) {
            formInfo.value = res.data.form;
            fieldList.value = res.data.fields;
            isSave.value = true;
          } else {
            message.error(res.message);
          }
        });
    };
    const refresh = () => {
      init(formInfo.value.name);
    };
    if (route.query && route.query.name) {
      init(route.query.name as string);
    }
    const setCache = () => {
      // TODO
    };
    const create = () => {
      fieldInfo.value = dataService.toFormValue(fieldFConfig.value as any);
      show.value = true;
    };
    const saveForm = () => {
      (formFDom.value as any).validate((val: boolean) => {
        if (val) {
          loading.open();
          clientService.general(systemApi.formConfigApi.createForm, undefined, formInfo.value).then(res => {
            loading.close();
            if (res.code === Constants.CODE.SUCCESS) {
              message.success(res.message);
              isSave.value = true;
            } else {
              message.error(res.message);
            }
          });
        }
      });
    };
    const confirmCreate = () => {
      loading.open();
      const param = copy(fieldInfo.value);
      param.formId = formInfo.value.formId;
      clientService.general(systemApi.formConfigApi.updateFormField, undefined, param).then(res => {
        loading.close();
        if (res.code === Constants.CODE.SUCCESS) {
          message.success(res.message);
          show.value = false;
          refresh();
        } else {
          message.error(res.message);
        }
      });
    };
    const importDB = () => {
      // TODO
    };
    const del = () => {
      // systemApi.dictApi.delete
      message.error("待完善");
    };
    const preview = () => {
      formInfo.value.fieldDtos = fieldList.value;
      previewFormConfig.value = dataService.toFormModel(formInfo.value);
      previewInfo.value = dataService.toFormValue(previewFormConfig.value);

      previewShow.value = true;
    };
    const previewOver = () => {
      previewShow.value = false;
    };
    const handleClick = (data: SysFormField, cmd: string) => {
      switch (cmd) {
        case "edit":
          fieldInfo.value = data;
          show.value = true;
          break;
        default:
          message.error("未定义的操作！");
      }
    };
    return {
      refresh,
      fieldList,
      fieldTConfig,
      handleClick,
      saveForm,
      confirmCreate,
      del,
      create,
      setCache,
      formFDom,
      formFConfig,
      formInfo,
      isSave,
      fieldFDom,
      fieldFConfig,
      fieldInfo,
      importDB,
      show,
      preview,
      previewShow,
      previewFormConfig,
      previewInfo,
      previewOver
    };
  }
});
</script>
<style scoped lang="scss">
.#{$prefix} {
  &-create-form-config {
  }
}
</style>
