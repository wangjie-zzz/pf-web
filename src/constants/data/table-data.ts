import { TableColumnModel, TableModel } from "@/model/entity/TabelModel";
import { DictNameEnum } from "@/constants/enum/dict-name.enum";

const sysDict = (): TableModel => {
  return new TableModel({
    name: "sysDict",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "dictId",
        label: "字典编号"
      }),
      new TableColumnModel({
        prop: "appId",
        label: "应用id"
      }),
      new TableColumnModel({
        prop: "dictField",
        label: "字典Key"
      }),
      new TableColumnModel({
        prop: "dictName",
        label: "字典名称"
      }),
      new TableColumnModel({
        prop: "dictKey",
        label: "字典项Key"
      }),
      new TableColumnModel({
        prop: "dictValue",
        label: "字典项Value"
      }),
      new TableColumnModel({
        prop: "dictSortNo",
        label: "显示顺序"
      }),
      new TableColumnModel({
        prop: "useState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      })
    ]
  });
};
const sysForm = (): TableModel => {
  return new TableModel({
    name: "sysForm",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "appId",
        label: "应用id"
      }),
      new TableColumnModel({
        prop: "name",
        label: "表单名称"
      }),
      new TableColumnModel({
        prop: "labelPosition",
        label: "标题定位",
        dict: DictNameEnum.LABEL_POSITION
      }),
      new TableColumnModel({
        prop: "labelWidth",
        label: "标题宽度"
      }),
      new TableColumnModel({
        prop: "disabled",
        label: "是否禁用",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "validateOnRuleChange",
        label: "是否校验规则改变后立即触发校验",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "hideRequiredAsterisk",
        label: "是否必填项隐藏红色*",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "showMessage",
        label: "是否显示校验错误信息",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "inlineMessage",
        label: "是否inline形式显示校验错误信息",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "statusIcon",
        label: "是否显示校验结果提示图标",
        dict: DictNameEnum.BOOLEAN
      })
    ]
  });
};
const sysFormField = (): TableModel => {
  return new TableModel({
    name: "sysFormField",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "appId",
        label: "应用id"
      }),
      new TableColumnModel({
        prop: "prop",
        label: "名称"
      }),
      new TableColumnModel({
        prop: "label",
        label: "标题"
      }),
      new TableColumnModel({
        prop: "type",
        label: "类型",
        dict: DictNameEnum.FORM_FIELD_TYPE
      }),
      new TableColumnModel({
        prop: "disable",
        label: "是否禁用",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "hidden",
        label: "是否隐藏",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "labelWidth",
        label: "标题宽度"
      }),
      new TableColumnModel({
        prop: "spanCol",
        label: "占有行数"
      }),
      new TableColumnModel({
        prop: "placeholder",
        label: "placeholder"
      }),
      new TableColumnModel({
        prop: "required",
        label: "是否必填",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "showMessage",
        label: "是否显示校验错误信息",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "inlineMessage",
        label: "是否inline形式显示校验错误信息",
        dict: DictNameEnum.BOOLEAN
      }),
      new TableColumnModel({
        prop: "prefix",
        label: "前置图标"
      }),
      new TableColumnModel({
        prop: "suffix",
        label: "后置图标"
      }),
      new TableColumnModel({
        prop: "prepend",
        label: "前置插槽"
      }),
      new TableColumnModel({
        prop: "append",
        label: "后置插槽"
      })
    ]
  });
};
const tenantInfo = (): TableModel => {
  return new TableModel({
    name: "tenantInfo",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "tenId",
        label: "租户编号"
      }),
      new TableColumnModel({
        prop: "tenName",
        label: "租户名称"
      }),
      new TableColumnModel({
        prop: "tenUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      }),
      new TableColumnModel({
        prop: "tenIntDate",
        label: "创建时间"
      }),
      new TableColumnModel({
        prop: "tenUpdDate",
        label: "最后修改时间"
      })
    ]
  });
};
const sysDept = (): TableModel => {
  return new TableModel({
    name: "sysDept",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "deptId",
        label: "部门编号"
      }),
      new TableColumnModel({
        prop: "deptName",
        label: "部门名称"
      }),
      new TableColumnModel({
        prop: "deptUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      }),
      new TableColumnModel({
        prop: "deptIntDate",
        label: "创建时间"
      }),
      new TableColumnModel({
        prop: "deptUpdDate",
        label: "最后修改时间"
      })
    ]
  });
};
const sysUser = (): TableModel => {
  return new TableModel({
    name: "sysUser",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "userId",
        label: "用户编号"
      }),
      new TableColumnModel({
        prop: "userCode",
        label: "用户账号"
      }),
      new TableColumnModel({
        prop: "userPhone",
        label: "手机号"
      }),
      new TableColumnModel({
        prop: "userName",
        label: "用户名"
      }),
      new TableColumnModel({
        prop: "userCardId",
        label: "证件号码"
      }),
      new TableColumnModel({
        prop: "userUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      }),
      new TableColumnModel({
        prop: "userIntDate",
        label: "创建时间"
      }),
      new TableColumnModel({
        prop: "userUpdDate",
        label: "最后修改时间"
      })
    ]
  });
};

const sysRole = (): TableModel => {
  return new TableModel({
    name: "sysRole",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "roleId",
        label: "角色编号"
      }),
      new TableColumnModel({
        prop: "roleName",
        label: "角色名称"
      }),
      new TableColumnModel({
        prop: "roleType",
        label: "角色类型",
        dict: DictNameEnum.ROLE_REL_TYPE
      }),
      new TableColumnModel({
        prop: "roleTenId",
        label: "所属租户"
      }),
      new TableColumnModel({
        prop: "roleUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      }),
      new TableColumnModel({
        prop: "roleIntDate",
        label: "创建时间"
      }),
      new TableColumnModel({
        prop: "roleUpdDate",
        label: "最后修改时间"
      })
    ]
  });
};

const sysPost = (): TableModel => {
  return new TableModel({
    name: "sysPost",
    showPage: true,
    columns: [
      new TableColumnModel({
        prop: "postId",
        label: "岗位编号"
      }),
      new TableColumnModel({
        prop: "postName",
        label: "岗位名称"
      }),
      new TableColumnModel({
        prop: "postType",
        label: "岗位类型"
      }),
      new TableColumnModel({
        prop: "postTenId",
        label: "所属租户"
      }),
      new TableColumnModel({
        prop: "postUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
      }),
      new TableColumnModel({
        prop: "postIntDate",
        label: "创建时间"
      }),
      new TableColumnModel({
        prop: "postUpdDate",
        label: "最后修改时间"
      })
    ]
  });
};

export { sysDict, sysFormField, sysForm, tenantInfo, sysDept, sysUser, sysRole, sysPost };
