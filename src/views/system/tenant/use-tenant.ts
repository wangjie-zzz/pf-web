import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import { useNotice } from "@/components/element-plus/notice";

export const useTenant = () => {
  const { message, loading } = useNotice();
  const list = (): Promise<any[]> => {
    loading.open();
    return clientService.general<any[]>(systemApi.tenantApi.list).then(res => {
      loading.close();
      if (res.code === Constants.CODE.SUCCESS) {
        return res.data;
      } else {
        message.error(res.message);
        return [];
      }
    });
  };
  const update = (body: any): Promise<boolean> => {
    loading.open();
    return clientService.general(systemApi.tenantApi.update, undefined, body).then(res => {
      loading.close();
      if (res.code !== Constants.CODE.SUCCESS) {
        message.error(res.message);
      }
      return res.code === Constants.CODE.SUCCESS;
    });
  };
  const deleteTen = (body: string[]): Promise<boolean> => {
    loading.open();
    return clientService.general(systemApi.tenantApi.delete, undefined, body).then(res => {
      loading.close();
      if (res.code !== Constants.CODE.SUCCESS) {
        message.error(res.message);
      }
      return res.code === Constants.CODE.SUCCESS;
    });
  };
  return { list, update, deleteTen };
};
