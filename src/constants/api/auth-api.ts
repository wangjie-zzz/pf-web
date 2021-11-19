import { BaseApi } from "@/constants/api/base-api";
import { Api, HeaderTypeEnum, MethodTypeEnum } from "pf-component";

class AuthApi extends BaseApi {
  oauthApi: Api = {};
  constructor() {
    super("pf-auth", process.env.VUE_APP_AUTH_URL);
    this.initPf();
  }

  initPf() {
    this.oauthApi = {
      authorize: {
        url: "http://localhost:8401/pf-auth/oauth/authorize", // TODO href 地址
        // url: this.getUrlNotPrefix() + "/oauth/authorize", // TODO href 地址
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.BASE
      },
      callback: {
        url: this.getUrlNotPrefix() + "/oauth/callback",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.BASE
      },
      logout: {
        url: this.getUrlNotPrefix() + "/logout",
        method: MethodTypeEnum.GET,
        header: HeaderTypeEnum.AUTH
      },
      refreshToken: {
        url: this.getUrlNotPrefix() + "/sso/refreshToken",
        method: MethodTypeEnum.POST,
        header: HeaderTypeEnum.AUTH
      }
    };
  }
}
export const authApi = new AuthApi();
