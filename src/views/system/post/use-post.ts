import { useNotice } from "@/components/element-plus/notice";
import { systemApi } from "@/constants/api/system-api";
import { ResponseCodeEnum, useHttpClient } from "pf-component";

export const usePost = () => {
  const { message } = useNotice();
  const list = (): Promise<any[]> => {
    return useHttpClient()
      .general<any[]>(systemApi.postApi.list)
      .then(res => {
        if (res.code === ResponseCodeEnum.SUCCESS) {
          return res.data;
        } else {
          message.error(res.message);
          return [];
        }
      });
  };
  const add = (body: any): Promise<boolean> => {
    return useHttpClient()
      .general(systemApi.postApi.add, undefined, body)
      .then(res => {
        if (res.code === ResponseCodeEnum.SUCCESS) {
          return true;
        } else {
          message.error(res.message);
          return false;
        }
      });
  };
  const addUser = (postId: string, userIds: string[]): Promise<boolean> => {
    return useHttpClient()
      .general(systemApi.postApi.addUser, { postId }, userIds)
      .then(res => {
        if (res.code === ResponseCodeEnum.SUCCESS) {
          return true;
        } else {
          message.error(res.message);
          return false;
        }
      });
  };
  const listUser = (postId: string): Promise<any[]> => {
    return useHttpClient()
      .general<any[]>(systemApi.postApi.listUser, { postId })
      .then(res => {
        if (res.code === ResponseCodeEnum.SUCCESS) {
          const all = res.data.map(e => {
            return { key: e.userId, label: e.userName, disabled: false };
          });
          const rel = res.data
            .filter(e => e.postId)
            .map(e => {
              return e.userId;
            });
          return [all, rel];
        } else {
          message.error(res.message);
          return [];
        }
      });
  };
  return { list, add, addUser, listUser };
};
