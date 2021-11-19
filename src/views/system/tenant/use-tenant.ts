import { systemApi } from "@/constants/api/system-api";
import { useNotice } from "@/components/element-plus/notice";
import { ResponseCodeEnum, useHttpClient } from "pf-component";

export const useTenant = () => {
  const { message } = useNotice();
  const list = (): Promise<any[]> => {
    return useHttpClient()
      .general<any[]>(systemApi.tenantApi.list)
      .then(res => {
        if (res.code === ResponseCodeEnum.SUCCESS) {
          return res.data;
        } else {
          message.error(res.message);
          return [];
        }
      });
  };
  const update = (body: any): Promise<boolean> => {
    return useHttpClient()
      .general(systemApi.tenantApi.update, undefined, body)
      .then(res => {
        if (res.code !== ResponseCodeEnum.SUCCESS) {
          message.error(res.message);
        }
        return res.code === ResponseCodeEnum.SUCCESS;
      });
  };
  const deleteTen = (body: string[]): Promise<boolean> => {
    return useHttpClient()
      .general(systemApi.tenantApi.delete, undefined, body)
      .then(res => {
        if (res.code !== ResponseCodeEnum.SUCCESS) {
          message.error(res.message);
        }
        return res.code === ResponseCodeEnum.SUCCESS;
      });
  };
  return { list, update, deleteTen };
};
