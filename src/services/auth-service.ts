import { clientService } from "@/services/client-service";
import { SysDict } from "pf-component/packages/services/model/SysDict";
import { systemApi } from "@/constants/api/system-api";
import { useNotice } from "@/components/element-plus/notice";
import { useDict } from "pf-component/packages/util/dict-convert";
import { authApi } from "@/constants/api/auth-api";
import { isNull } from "pf-component/packages/util/objects-utils";
import { Constants } from "@/constants/constants";

class AuthService {
  private static REDIRECT_URI = "http://localhost:4200/dcms/callback";
  private static readonly AUTHORIZE_CALLBACK_PARAMS = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: "pf-web",
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_secret: "123456",
    // eslint-disable-next-line @typescript-eslint/camelcase
    redirect_uri: `${AuthService.REDIRECT_URI}`
  };
  private static readonly AUTHORIZE_CODE_PARAMS = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: "pf-web",
    // eslint-disable-next-line @typescript-eslint/camelcase
    redirect_uri: `${AuthService.REDIRECT_URI}`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    response_type: "code"
  };
  private static readonly TOKEN = "access_token";
  private static readonly REFRESH_TOKEN = "refresh_token";
  private static readonly USER = "user_identity";
  private initDict(): Promise<boolean> {
    return clientService.general<SysDict[]>(systemApi.dictApi.list).then(response => {
      if (response.code === Constants.CODE.SUCCESS) {
        useDict().setDict(response.data);
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }

  setCache(token: any) {
    sessionStorage.setItem(AuthService.TOKEN, token.accessToken);
    sessionStorage.setItem(AuthService.REFRESH_TOKEN, token.refreshToken);
    sessionStorage.setItem(AuthService.USER, token.jti);
    this.initDict().then(res => {
      if (!res) {
        useNotice().message.error("加载字典失败");
      }
    });
  }
  clearCache() {
    sessionStorage.clear();
  }
  getToken() {
    return sessionStorage.getItem(AuthService.TOKEN);
  }
  checkToken(): boolean {
    return !sessionStorage.getItem(AuthService.TOKEN);
  }
  getUser(): string {
    return sessionStorage.getItem(AuthService.USER) || "";
  }
  logout(): Promise<boolean> {
    return clientService.general(authApi.oauthApi.logout).then(res => {
      if (res.code === Constants.CODE.SUCCESS) {
        authService.clearCache();
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }
  authCode(): void {
    const href = clientService.urlQueryConvert(authApi.oauthApi.authorize.url, AuthService.AUTHORIZE_CODE_PARAMS);
    location.href = href;
  }
  token(params: any): Promise<boolean> {
    if (isNull(params) || isNull(params.code)) {
      return Promise.resolve(false);
    }
    return clientService
      .general(authApi.oauthApi.callback, undefined, {
        ...AuthService.AUTHORIZE_CALLBACK_PARAMS,
        ...params
      })
      .then(res => {
        console.log(res);
        if (res.code === Constants.CODE.SUCCESS) {
          this.setCache(res.data);
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }
  refreshToken(): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const params = { ...AuthService.AUTHORIZE_CALLBACK_PARAMS, refresh_token: this.getRefreshToken() };
    return clientService.general(authApi.oauthApi.refreshToken, undefined, params).then(res => {
      authService.setCache(res.data);
      return Promise.resolve(true);
    });
  }
  private getRefreshToken(): string {
    return sessionStorage.getItem(AuthService.REFRESH_TOKEN) || "";
  }
}
export const authService = new AuthService();
