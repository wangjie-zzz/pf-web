<template>
  <el-button @click="disable">disable-name</el-button>
  <el-date-picker v-model="value1" type="week" format="[Week] ww" placeholder="Pick a week"> </el-date-picker>
  <PfTest :title="'self-test: '"><span>i'm pf content </span></PfTest>
  <el-form class="pf-mb-50" :config="formConfig" :model="formInfo" @validate="validate" @blurEvent="blurEvent" @changeEvent="changeEvent" @focusEvent="focusEvent" @inputEvent="inputEvent"></el-form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
import { useData, emptyForm, FormModel } from "pf-component";
import { FormNameEnum } from "@/constants/enum/form-name.enum";

export default defineComponent({
  name: "FormTest",
  setup(prop) {
    const formConfig: Ref<FormModel> = ref(emptyForm);
    const formInfo: Ref<any> = ref(undefined as any);
    useData()
      .loadForm([
        {
          name: FormNameEnum.testForm,
          config: formConfig,
          info: formInfo
        }
      ])
      .then(res => {
        if (res) {
          console.log(formConfig.value.fields[6]);
          console.log("表单加载成功");
        }
      });

    const changeEvent = (newV: any, prop: string) => {
      console.log("changeEvent", newV, prop);
    };
    const blurEvent = (field: any) => {
      console.log("blurEvent", field, formInfo.value[field.prop]);
    };
    const focusEvent = (field: any) => {
      console.log("focusEvent", field, formInfo.value[field.prop]);
    };
    const inputEvent = (newV: any, prop: string) => {
      console.log("inputEvent", newV, prop);
    };
    const validate = (val: any, val2: any, val3: any) => {
      console.log("validate", val, val2, val3);
    };
    const disable = () => {
      formConfig.value.setDisable("name", !formConfig.value.getDisable("name"));
      console.log(formConfig.value?.getDisable("name"));
    };
    return {
      formConfig,
      formInfo,
      blurEvent,
      focusEvent,
      changeEvent,
      inputEvent,
      validate,
      disable
    };
  }
});
</script>
