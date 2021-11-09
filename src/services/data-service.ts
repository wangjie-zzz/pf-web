import { clientService } from "@/services/client-service";
import { SysDict } from "@/model/SysDict";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import { useNotice } from "@/components/element-plus/notice";
import { DictNameEnum } from "@/constants/enum/dict-name.enum";
import { SysFormInfo } from "@/model/entity/SysFormInfo";
import { FormNameEnum } from "@/constants/enum/form-name.enum";
import { FormFieldModel, FormModel, Options } from "@/model/entity/FormModel";
import { SysFormField } from "@/model/entity/SysFormField";
import { isTrue } from "@/constants/enum/bool.enum";
import { isNull } from "@/constants/util/objects-utils";
import { useDict } from "@/constants/util/dict-convert";
import { Ref } from "vue";
interface FormServiceModel {
  name: FormNameEnum;
  config: Ref<FormModel | undefined>;
  info: Ref<any>;
}
class DataService {
  getFormByName(forms: FormServiceModel[]): Promise<boolean> {
    if (isNull(forms)) return Promise.resolve(false);
    return clientService
      .general<SysFormInfo[]>(
        systemApi.formConfigApi.cacheList,
        undefined,
        forms.map(form => form.name)
      )
      .then(response => {
        if (response.code === Constants.CODE.SUCCESS) {
          if (!isNull(response.data)) {
            let res = true;
            forms.forEach(form => {
              const sysFormInfo = response.data.find(sysFormInfo => sysFormInfo.name === form.name);
              if (sysFormInfo) {
                form.config.value = this.toFormModel(sysFormInfo);
                form.info.value = this.toFormValue(form.config.value);
              } else {
                form.config.value = {} as any;
                form.info.value = {} as any;
                res = false;
              }
            });
            return Promise.resolve(res);
          }
          return Promise.resolve(false);
        } else {
          useNotice().message.error(response.message);
          return Promise.resolve(false);
        }
      });
  }
  getDictByField(fields: DictNameEnum[]): Promise<SysDict[]> {
    return clientService.general<SysDict[]>(systemApi.dictApi.cacheList, undefined, fields).then(response => {
      if (response.code === Constants.CODE.SUCCESS) {
        return Promise.resolve(response.data);
      } else {
        useNotice().message.error(response.message);
        return Promise.resolve([]);
      }
    });
  }
  private toFormFieldModel(obj: SysFormField, options?: Options[]): FormFieldModel {
    return new FormFieldModel({
      prop: obj.prop,
      label: obj.label,
      multiple: isTrue(obj.multiple),
      clearable: isTrue(obj.clearable),
      filterable: isTrue(obj.filterable),
      allowCreate: isTrue(obj.allowCreate),
      remote: isTrue(obj.remote),
      collapseTags: isTrue(obj.collapseTags),
      showAllLevels: isTrue(obj.showAllLevels),
      placeholder: obj.placeholder,
      labelWidth: obj.labelWidth,
      spanCol: obj.spanCol,
      disable: isTrue(obj.disable),
      hidden: isTrue(obj.hidden),
      type: obj.type,
      dict: obj.dict,
      value: obj.value,
      required: isTrue(obj.required),
      showMessage: isTrue(obj.showMessage),
      inlineMessage: isTrue(obj.inlineMessage),
      showPassword: isTrue(obj.showPassword),
      prefix: obj.prefix,
      suffix: obj.suffix,
      prepend: obj.prepend,
      append: obj.append,
      options: options
    });
  }

  toFormModel(obj: SysFormInfo): FormModel {
    return new FormModel({
      name: obj.name,
      fields: isNull(obj.fieldDtos) ? [] : obj.fieldDtos.map(field => this.toFormFieldModel(field)),
      // rules?: RuleItem[];
      labelPosition: useDict().convertDict(DictNameEnum.LABEL_POSITION, obj.labelPosition),
      labelWidth: obj.labelWidth,
      disabled: isTrue(obj.disable),
      validateOnRuleChange: isTrue(obj.validateOnRuleChange),
      hideRequiredAsterisk: isTrue(obj.hideRequiredAsterisk),
      showMessage: isTrue(obj.showMessage),
      inlineMessage: isTrue(obj.inlineMessage),
      statusIcon: isTrue(obj.statusIcon)
    });
  }
  toFormValue(form: FormModel, value?: any): any {
    if (!value) {
      value = {};
    }
    form.fields.forEach(f => {
      if (!value[f.prop] && value[f.prop] !== 0) value[f.prop] = f.value;
    });
    return value;
  }
}
export const dataService = new DataService();
