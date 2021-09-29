import { Api, BaseApi } from "@/constants/api/base-api";
import { MethodTypeEnum } from "@/constants/enum/method-type.enum";
import { HeaderTypeEnum } from "@/constants/enum/header-type.enum";

class AuthApi extends BaseApi {
  oauthApi: Api = {};
  constructor() {
    super("pf-auth");
    this.initPf();
  }

  initPf() {
    this.oauthApi = {
      authorize: {
        url: "http://localhost:8401/oauth/authorize", // TODO href 地址
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.BASE.code
      },
      callback: {
        url: this.getUrl() + "/oauth/callback",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.BASE.code
      },
      logout: {
        url: this.getUrl() + "/logout",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.BASE.code
      },
      refreshToken: {
        url: this.getUrl() + "/sso/refreshToken",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
  }

  getUrl(): string {
    // TODO 经过网关有问题
    if (this.enableGateway) {
      if (this.enableProxy) {
        return `/${this.project}-api`;
      } else {
        return process.env.VUE_APP_AUTH_URL || "";
      }
    }
    return this.baseUrl;
  }
}
export const authApi = new AuthApi();
