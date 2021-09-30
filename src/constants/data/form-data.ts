import { FormFieldModel, FormModel, FormTypeEnum } from "@/model/entity/FormModel";
import { UseStateEnum } from "@/constants/enum/use-state.enum";
import { DictNameEnum } from "@/constants/enum/dict-name.enum";
const toFormValue = (form: FormModel, value?: any) => {
  if (!value) {
    value = {};
  }
  form.fields.forEach(f => {
    if (!value[f.prop] && value[f.prop] !== 0) value[f.prop] = f.value;
  });
  return value;
};
const testForm = (): FormModel => {
  return new FormModel({
    name: "testForm",
    fields: [
      new FormFieldModel({
        prop: "name",
        label: "姓名",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "sex",
        label: "性别",
        type: FormTypeEnum.RADIO.code,
        required: true,
        options: [
          { key: "1", value: "男" },
          { key: "0", value: "女" }
        ],
        rules: []
      }),
      new FormFieldModel({
        prop: "age",
        label: "年龄",
        type: FormTypeEnum.NUMBER.code,
        value: 0,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "class",
        label: "班级",
        type: FormTypeEnum.SELECT.code,
        options: [
          { key: "1", value: "A班" },
          { key: "0", value: "B班" }
        ],
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "subject",
        label: "选修课程",
        multiple: true,
        filterable: true,
        clearable: true,
        allowCreate: true,
        remote: true,
        type: FormTypeEnum.SELECT.code,
        options: [
          { key: "1", value: "C" },
          { key: "2", value: "C++" },
          { key: "3", value: "C#" },
          { key: "4", value: "Java" },
          { key: "5", value: "Python" }
        ],
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "address",
        label: "籍贯",
        clearable: true,
        type: FormTypeEnum.CASCADER.code,
        options: [
          {
            key: "0",
            value: "北京",
            children: [
              { key: "0-1", value: "东城区", leaf: true },
              { key: "0-2", value: "西城区", leaf: true },
              { key: "0-3", value: "海淀区", leaf: true }
            ]
          },
          {
            key: "1",
            value: "山东",
            children: [
              { key: "1-1", value: "青岛", leaf: true },
              { key: "1-2", value: "济南", leaf: true },
              { key: "1-3", value: "泰安", leaf: true }
            ]
          }
        ],
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "hobby",
        label: "爱好",
        type: FormTypeEnum.CHECKBOX.code,
        options: [
          { key: "1", value: "男" },
          { key: "0", value: "女" },
          { key: "2", value: "中" }
        ],
        value: [],
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "remark",
        label: "备注",
        type: FormTypeEnum.TEXTAREA.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "birthday",
        label: "生日",
        type: FormTypeEnum.DATE.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "birthdayTime",
        label: "生日时间",
        type: FormTypeEnum.TIME.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "joinTime",
        label: "入学时间",
        type: FormTypeEnum.DATETIME.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};

const login = (): FormModel => {
  return new FormModel({
    name: "loginForm",
    fields: [
      new FormFieldModel({
        prop: "code",
        placeholder: "请输入账户/手机号",
        prefix: "el-icon-user",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "pwd",
        placeholder: "请输入密码",
        showPassword: true,
        prefix: "el-icon-unlock",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "type",
        type: FormTypeEnum.SELECT.code,
        value: "1",
        required: true,
        options: [
          { key: "1", value: "用户账户" },
          { key: "0", value: "手机号" }
        ],
        rules: []
      })
    ],
    rules: []
  });
};
const sysDictForm = (): FormModel => {
  return new FormModel({
    name: "sysDictForm",
    fields: [
      new FormFieldModel({
        prop: "appId",
        label: "所属应用",
        type: FormTypeEnum.INPUT.code,
        value: "system",
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictField",
        label: "字典Key",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictName",
        label: "字典名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictKey",
        label: "字典项Key",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictValue",
        label: "字典项名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictSortNo",
        label: "显示顺序",
        type: FormTypeEnum.NUMBER.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "dictUseState",
        label: "使用状态",
        type: FormTypeEnum.SELECT.code,
        dict: DictNameEnum.USE_STATE,
        value: UseStateEnum.VAILD.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
const tenantForm = (): FormModel => {
  return new FormModel({
    name: "tenantForm",
    fields: [
      new FormFieldModel({
        prop: "tenName",
        label: "租户名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "tenUseState",
        label: "使用状态",
        type: FormTypeEnum.SELECT.code,
        dict: DictNameEnum.USE_STATE,
        value: UseStateEnum.VAILD.code,
        required: true,
        rules: []
      })
    ],
    rules: []
  });
};
const companyForm = (): FormModel => {
  return new FormModel({
    name: "companyForm",
    fields: [
      new FormFieldModel({
        prop: "comName",
        label: "公司名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "comTenId",
        label: "所属租户",
        type: FormTypeEnum.SELECT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "comSupComId",
        label: "上级公司名称",
        type: FormTypeEnum.CASCADER.code,
        // required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "comTelMan",
        label: "公司联系人",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "comOrgPhone",
        label: "公司电话",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "comAddresss",
        label: "公司地址",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
const deptForm = (): FormModel => {
  return new FormModel({
    name: "deptForm",
    fields: [
      new FormFieldModel({
        prop: "deptName",
        label: "部门名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "deptTenId",
        label: "所属租户",
        type: FormTypeEnum.SELECT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "deptComId",
        label: "所属公司",
        type: FormTypeEnum.CASCADER.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "deptSupDeptId",
        label: "上级部门名称",
        type: FormTypeEnum.CASCADER.code,
        // required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "deptManager",
        label: "部门管理员",
        type: FormTypeEnum.SELECT.code,
        required: true,
        hidden: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
const sysUserForm = (): FormModel => {
  return new FormModel({
    name: "sysUserForm",
    fields: [
      new FormFieldModel({
        prop: "userName",
        label: "用户名",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "userTenId",
        label: "所属租户",
        type: FormTypeEnum.SELECT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "userComId",
        label: "所属公司",
        type: FormTypeEnum.CASCADER.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "userDeptId",
        label: "所属部门",
        type: FormTypeEnum.CASCADER.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "userPhone",
        label: "手机号",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      }),
      new FormFieldModel({
        prop: "userCardId",
        label: "证件号码",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
const sysRoleForm = (): FormModel => {
  return new FormModel({
    name: "sysRoleForm",
    fields: [
      new FormFieldModel({
        prop: "roleName",
        label: "角色名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
const sysPostForm = (): FormModel => {
  return new FormModel({
    name: "sysPostForm",
    fields: [
      new FormFieldModel({
        prop: "postName",
        label: "岗位名称",
        type: FormTypeEnum.INPUT.code,
        required: true,
        rules: []
      })
    ],
    labelWidth: "120px",
    rules: []
  });
};
export { testForm, login, tenantForm, sysDictForm, companyForm, deptForm, sysUserForm, sysRoleForm, sysPostForm, toFormValue };
