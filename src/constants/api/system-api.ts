import { Api, BaseApi, HeaderTypeEnum, isTrue, MethodTypeEnum } from "pf-component";

class SystemApi extends BaseApi {
  tenantApi: Api = {};
  companyApi: Api = {};
  userApi: Api = {};
  appApi: Api = {};
  dictApi: Api = {};
  metadataApi: Api = {};
  formConfigApi: Api = {};
  tableConfigApi: Api = {};
  roleApi: Api = {};
  postApi: Api = {};
  constructor() {
    super(
      "pf-system",
      process.env.VUE_APP_SYSTEM_URL,
      process.env.VUE_APP_BASE_URL,
      process.env.VUE_APP_API_PREFIX,
      isTrue(process.env.VUE_APP_ENABLE_PROXY),
      isTrue(process.env.VUE_APP_ENABLE_GATEWAY)
    );
    this.initKm();
  }

  initKm() {
    this.userApi = {
      adminCreate: {
        url: super.getUrl() + "/sysUserInfo/adminCreate",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.postApi = {
      list: {
        url: super.getUrl() + "/sysPostInfo/list",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      add: {
        url: super.getUrl() + "/sysPostInfo/add",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      addUser: {
        url: super.getUrl() + "/sysPostInfo/addUser",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      listUser: {
        url: super.getUrl() + "/sysPostInfo/listUser",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.roleApi = {
      list: {
        url: super.getUrl() + "/sysRoleInfo/list",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      add: {
        url: super.getUrl() + "/sysRoleInfo/add",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      addRoleRel: {
        url: super.getUrl() + "/sysRoleInfo/addRoleRel",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      addRoleAuth: {
        url: super.getUrl() + "/sysRoleInfo/addRoleAuth",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      listRoleRel: {
        url: super.getUrl() + "/sysRoleInfo/listRoleRel",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      listRoleAuth: {
        url: super.getUrl() + "/sysRoleInfo/listRoleAuth",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.dictApi = {
      delete: {
        url: super.getUrl() + "/sysDictInfo/delete",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      update: {
        url: super.getUrl() + "/sysDictInfo/update",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.appApi = {
      list: {
        url: super.getUrl() + "/sysAppInfo/selectAppAndMenuList",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.companyApi = {
      userList: {
        url: super.getUrl() + "/sysCompanyInfo/userList",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      list: {
        url: super.getUrl() + "/sysCompanyInfo/selectComTree",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      deptList: {
        url: super.getUrl() + "/sysCompanyInfo/deptList",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      addCompany: {
        url: super.getUrl() + "/sysCompanyInfo/addCompany",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      addDept: {
        url: super.getUrl() + "/sysCompanyInfo/addDept",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.tenantApi = {
      list: {
        url: super.getUrl() + "/sysTenantInfo/list",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      delete: {
        url: super.getUrl() + "/sysTenantInfo/delete",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      update: {
        url: super.getUrl() + "/sysTenantInfo/update",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.metadataApi = {
      dbNames: {
        url: super.getUrl() + "/metadata/dbNames",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      getTableNamesByDb: {
        url: super.getUrl() + "/metadata/getTableNamesByDb",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      getTableNamesByDbAndTb: {
        url: super.getUrl() + "/metadata/getTableNamesByDbAndTb",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.formConfigApi = {
      list: {
        url: super.getUrl() + "/sysFormInfo/list",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      formInfo: {
        url: super.getUrl() + "/sysFormInfo/info",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      createForm: {
        url: super.getUrl() + "/sysFormInfo/createForm",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      createByTable: {
        url: super.getUrl() + "/sysFormInfo/createByTable",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      /*createFormField: { // 用于form-data.ts的数据导入
        url: super.getUrl() + "/sysFormInfo/createFormField",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },*/
      updateFormField: {
        url: super.getUrl() + "/sysFormInfo/updateFormField",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
    this.tableConfigApi = {
      list: {
        url: super.getUrl() + "/sysTableInfo/list",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      info: {
        url: super.getUrl() + "/sysTableInfo/info",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      create: {
        url: super.getUrl() + "/sysTableInfo/create",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      createByTable: {
        url: super.getUrl() + "/sysTableInfo/createByTable",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      createField: {
        // 用于table-data.ts的数据导入
        url: super.getUrl() + "/sysTableInfo/createField",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      },
      updateField: {
        url: super.getUrl() + "/sysTableInfo/updateField",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
  }
}
export const systemApi = new SystemApi();
