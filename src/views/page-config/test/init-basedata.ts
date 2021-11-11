// import { companyForm, deptForm, sysDictForm, sysFieldForm, sysFormForm, sysPostForm, sysRoleForm, sysUserForm, tenantForm, testForm } from "@/constants/data/form-data";
// import { clientService } from "@/services/client-service";
// import { systemApi } from "@/constants/api/system-api";
// import { Constants } from "@/constants/constants";
// import { FormFieldModel, FormModel } from "@/model/entity/FormModel";
// import { DictNameEnum } from "@/constants/enum/dict-name.enum";
// import { SysDict } from "@/model/SysDict";
// import { authService } from "@/services/auth-service";
//
// const formDatas = [
//   /*testForm(), tenantForm()*/
//   // sysFormForm(),
//   // sysFieldForm(),
//   // sysDictForm(),
//   // companyForm(),
//   // deptForm(),
//   // sysUserForm(),
//   // sysRoleForm(),
//   // sysPostForm()
// ];
// const convertDictName = (name: DictNameEnum, fieldname: any): number => {
//   if (name) {
//     const dicts: SysDict[] =
//       authService
//         .getDict()
//         .filter(d => d.dictField === name)
//         .filter(d1 => d1.dictValue === fieldname) || [];
//     if (dicts.length > 0) return dicts[0].dictKey;
//   }
//   throw new Error();
// };
// const transferForm = (form: FormModel): any => {
//   return {
//     appId: Constants.DEFAULT_APP_ID,
//     name: form.name,
//     labelPosition: convertDictName(DictNameEnum.LABEL_POSITION, form.labelPosition),
//     labelWidth: form.labelWidth,
//     disabled: form.disabled ? 1 : 0,
//     validateOnRuleChange: form.validateOnRuleChange ? 1 : 0,
//     hideRequiredAsterisk: form.hideRequiredAsterisk ? 1 : 0,
//     showMessage: form.showMessage ? 1 : 0,
//     inlineMessage: form.inlineMessage ? 1 : 0,
//     statusIcon: form.statusIcon ? 1 : 0
//   };
// };
// const transferFields = (fields: FormFieldModel[], formId: any): any[] => {
//   return fields.map(field => {
//     return {
//       appId: Constants.DEFAULT_APP_ID,
//       formId: formId,
//       prop: field.prop,
//       type: field.type,
//       value: typeof field.value === "object" ? "" : field.value || "", // TODO 不能返回object
//       dict: field.dict || "",
//       // /*cascader/select 是否可以清空输入值*/
//       clearable: field.clearable ? 1 : 0,
//       // /*select 多选*/
//       multiple: field.multiple ? 1 : 0,
//       allowCreate: field.allowCreate ? 1 : 0,
//       filterable: field.filterable ? 1 : 0,
//       remote: field.remote ? 1 : 0,
//       // // filterMethod?: boolean;
//       // // remoteMethod?: boolean;
//       collapseTags: field.collapseTags ? 1 : 0 /*select 多选时开启折叠tag*/,
//       showAllLevels: field.showAllLevels ? 1 : 0 /*cascader-select 输入框中是否显示选中值的完整路径*/,
//       label: field.label,
//       labelWidth: field.labelWidth,
//       spanCol: field.spanCol,
//       disable: field.disable ? 1 : 0,
//       hidden: field.hidden ? 1 : 0,
//       placeholder: field.placeholder || "",
//       // options?: Options[];
//       required: field.required ? 1 : 0 /*必填，如不设置，则会根据校验规则自动生成 false*/,
//       showMessage: field.showMessage ? 1 : 0 /*显示校验错误信息 true*/,
//       inlineMessage: field.inlineMessage ? 1 : 0 /*inline形式显示校验信息 false*/,
//       showPassword: field.showPassword ? 1 : 0,
//       prefix: field.prefix || "" /*头部图标*/,
//       suffix: field.suffix || "" /*尾部图标*/,
//       prepend: field.prepend || "" /*前缀插槽名称*/,
//       append: field.append || "" /*后缀插槽名称*/
//       // rules?: RuleItem[];
//       // cascaderProp: any;
//     };
//   });
// };
// export const init = () => {
//   formDatas.forEach((form, idx) => {
//     if (idx === 0) {
//       clientService.general(systemApi.formConfigApi.createForm, undefined, transferForm(form)).then(res => {
//         console.log(res);
//         if (res.code === Constants.CODE.SUCCESS) {
//           clientService.general(systemApi.formConfigApi.createFormField, undefined, transferFields(form.fields, res.data)).then(res => {
//             console.log(res);
//           });
//         }
//       });
//     }
//   });
// };
