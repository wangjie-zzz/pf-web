import { MethodTypeEnum } from "@/constants/enum/method-type.enum";
import { HeaderTypeEnum } from "@/constants/enum/header-type.enum";
import { HeaderService } from "@/services/header-service";
import { Constants } from "@/constants/constants";
import { CommonResult } from "@/model/CommonResult";
import { ApiDetail } from "@/constants/api/base-api";

class ClientService extends HeaderService {
  private fetch0(path: string, method: string = MethodTypeEnum.GET.code, param: any, requestConfig: RequestInit): Promise<any> {
    if (typeof param === "object") param = JSON.stringify(param);
    return fetch(path, {
      method: method,
      body: param || null,
      headers: requestConfig.headers,
      credentials: "include"
    })
      .then(this.successHanlder())
      .catch(this.errorHandler());
  }

  general<T>(api: ApiDetail, query?: any, params?: any): Promise<CommonResult<T>> {
    if (!api) {
      return Promise.resolve({} as any);
    }
    const path = api.url;
    let requestConfig: RequestInit;
    switch (api.header) {
      case HeaderTypeEnum.BASE.code:
        requestConfig = this.createBasicHeaders();
        break;
      case HeaderTypeEnum.AUTH.code:
        requestConfig = this.createAuthHeaders();
        break;
      default:
        requestConfig = this.createBasicHeaders();
    }

    return this.fetch(path, api.method, requestConfig, query, params);
  }
  fetch<T>(path: string, method: string, requestConfig: RequestInit, query?: any, params?: any): Promise<T> {
    path = this.urlQueryConvert(path, query);
    return this.fetch0(path, method, params, requestConfig)
      .then(response => {
        if (response.code === Constants.CODE.INVALID_TOKEN) {
          console.warn("token已过期，刷新中...");
          return this.refreshToken().then((res: boolean) => {
            if (res) {
              requestConfig = Object.assign(requestConfig, this.createAuthHeaders());
              return this.fetch(path, method, requestConfig, undefined, params);
            } else {
              return Promise.resolve(response);
            }
          });
        } else {
          return Promise.resolve(response);
        }
      })
      .catch(error => {
        return Promise.resolve(error);
      });
  }

  successHanlder() {
    return (response: Response) => {
      // console.log(response);
      if (typeof response === "object") {
        if (response.ok && response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return { code: 404, message: "请求路径错误" };
        }
      } else {
        return { code: Constants.CODE.SERVER_FAIL, message: "服务器响应异常" };
      }
    };
  }

  errorHandler() {
    return (error: any) => {
      // console.log(error === "TypeError: Failed to fetch");
      return { code: Constants.CODE.SERVER_FAIL, message: "服务器异常", data: error };
    };
  }

  jsonToFormData(params: any) {
    if (params != null) {
      const formData = new FormData();
      Object.keys(params).forEach(key => {
        formData.append(key, params[key]);
      });
      return formData;
    }
  }

  urlQueryConvert(url: string, query: any) {
    if (query) {
      let connectiveSymbol = "";
      if (url.indexOf("?") !== -1) {
        connectiveSymbol = "&";
      } else {
        connectiveSymbol = "?";
      }
      Object.keys(query).forEach((key, idx) => {
        const val = query[key];
        if (idx === 0) {
          if (val != null && val !== "null" && val !== "undefined") {
            url += connectiveSymbol + key + "=" + val;
          } else {
            url += connectiveSymbol + key + "=";
          }
        } else {
          if (val != null && val !== "null" && val !== "undefined") {
            url += "&" + key + "=" + val;
          } else {
            url += "&" + key + "=";
          }
        }
      });
    }
    return url;
  }

  refreshToken(): Promise<boolean> {
    /*TODO*/
    console.log("refreshtoken....");
    return Promise.resolve(false);
  }
}
export const clientService = new ClientService();
