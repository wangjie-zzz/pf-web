import { Api, BaseApi } from "@/constants/api/base-api";
import { MethodTypeEnum } from "@/constants/enum/method-type.enum";
import { HeaderTypeEnum } from "@/constants/enum/header-type.enum";

class SystemApi extends BaseApi {
  tenantApi: Api = {};
  companyApi: Api = {};
  userApi: Api = {};
  appApi: Api = {};
  dictApi: Api = {};
  menuApi: Api = {};
  roleApi: Api = {};
  postApi: Api = {};
  constructor() {
    super("pf-system");
    this.initKm();
  }

  initKm() {
    this.userApi = {
      adminCreate: {
        url: this.getUrl() + "/sysUserInfo/adminCreate",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.menuApi = {
      list: {
        url: this.getUrl() + "/sysMenuInfo/list",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.postApi = {
      list: {
        url: this.getUrl() + "/sysPostInfo/list",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      add: {
        url: this.getUrl() + "/sysPostInfo/add",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      addUser: {
        url: this.getUrl() + "/sysPostInfo/addUser",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      listUser: {
        url: this.getUrl() + "/sysPostInfo/listUser",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.roleApi = {
      list: {
        url: this.getUrl() + "/sysRoleInfo/list",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      add: {
        url: this.getUrl() + "/sysRoleInfo/add",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      addRoleRel: {
        url: this.getUrl() + "/sysRoleInfo/addRoleRel",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      addRoleAuth: {
        url: this.getUrl() + "/sysRoleInfo/addRoleAuth",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      listRoleRel: {
        url: this.getUrl() + "/sysRoleInfo/listRoleRel",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      listRoleAuth: {
        url: this.getUrl() + "/sysRoleInfo/listRoleAuth",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.dictApi = {
      list: {
        url: this.getUrl() + "/sysDictInfo/list",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      delete: {
        url: this.getUrl() + "/sysDictInfo/delete",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      update: {
        url: this.getUrl() + "/sysDictInfo/update",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.appApi = {
      list: {
        url: this.getUrl() + "/sysAppInfo/selectAppAndMenuList",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.companyApi = {
      userList: {
        url: this.getUrl() + "/sysCompanyInfo/userList",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      list: {
        url: this.getUrl() + "/sysCompanyInfo/selectComTree",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      deptList: {
        url: this.getUrl() + "/sysCompanyInfo/deptList",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      addCompany: {
        url: this.getUrl() + "/sysCompanyInfo/addCompany",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      addDept: {
        url: this.getUrl() + "/sysCompanyInfo/addDept",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
    this.tenantApi = {
      list: {
        url: this.getUrl() + "/sysTenantInfo/list",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      delete: {
        url: this.getUrl() + "/sysTenantInfo/delete",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      },
      update: {
        url: this.getUrl() + "/sysTenantInfo/update",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
  }
}
export const systemApi = new SystemApi();
