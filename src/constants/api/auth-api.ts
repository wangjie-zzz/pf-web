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
        url: "http://localhost:8401/pf-auth/oauth/authorize", // TODO href 地址
        // url: this.getUrlNotPrefix() + "/oauth/authorize", // TODO href 地址
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.BASE.code
      },
      callback: {
        url: this.getUrlNotPrefix() + "/oauth/callback",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.BASE.code
      },
      logout: {
        url: this.getUrlNotPrefix() + "/logout",
        method: MethodTypeEnum.GET.code,
        header: HeaderTypeEnum.AUTH.code
      },
      refreshToken: {
        url: this.getUrlNotPrefix() + "/sso/refreshToken",
        method: MethodTypeEnum.POST.code,
        header: HeaderTypeEnum.AUTH.code
      }
    };
  }
}
export const authApi = new AuthApi();
