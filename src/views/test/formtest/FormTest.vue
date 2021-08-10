<template>
  <el-button @click="disable">disable-name</el-button>
  <el-form class="pf-mb-50" :config="formConfig" :model="formInfo" @validate="validate" @blurEvent="blurEvent" @changeEvent="changeEvent" @focusEvent="focusEvent" @inputEvent="inputEvent"></el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { testForm, toFormValue } from "@/constants/data/form-data";

export default defineComponent({
  name: "FormTest",
  setup(prop) {
    const formConfig = reactive(testForm());
    const formInfo: any = toFormValue(formConfig);

    const changeEvent = (newV: any, prop: string) => {
      console.log("changeEvent", newV, prop);
    };
    const blurEvent = (field: any) => {
      console.log("blurEvent", field, formInfo[field.prop]);
    };
    const focusEvent = (field: any) => {
      console.log("focusEvent", field, formInfo[field.prop]);
    };
    const inputEvent = (newV: any, prop: string) => {
      console.log("inputEvent", newV, prop);
    };
    const validate = (val: any, val2: any, val3: any) => {
      console.log("validate", val, val2, val3);
    };
    const disable = () => {
      formConfig.setDisable("name", !formConfig.getDisable("name"));
      console.log(formConfig.getDisable("name"));
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
