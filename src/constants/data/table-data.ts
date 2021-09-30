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
        prop: "dictUseState",
        label: "使用状态",
        dict: DictNameEnum.USE_STATE
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
        label: "证件号码",
        dict: DictNameEnum.USE_STATE
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

export { sysDict, tenantInfo, sysDept, sysUser, sysRole, sysPost };
