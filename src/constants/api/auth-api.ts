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
        //"http://localhost:8201/pf-auth/oauth/authorize"/*TODO 网关时有问题*/
        url: "http://localhost:8401/oauth/authorize",
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
      }
    };
  }

  getUrl(): string {
    return this.enableGateway ? this.baseUrl + "/" + this.project : this.baseUrl;
  }
}
export const authApi = new AuthApi();
