import { Constants } from "@/constants/constants";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { useNotice } from "@/components/element-plus/notice";
import { SysDict } from "@/model/SysDict";

class DictService {
  private initDict(): Promise<boolean> {
    return clientService.general<SysDict[]>(systemApi.dictApi.list).then(response => {
      if (response.code === Constants.CODE.SUCCESS) {
        this.setDict(response.data);
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }

  private setDict(data: SysDict[]): void {
    sessionStorage.setItem(Constants.DICT, JSON.stringify(data));
  }

  getDict(): SysDict[] {
    const dictStr = sessionStorage.getItem(Constants.DICT);
    if (dictStr) {
      const dicts = JSON.parse(dictStr);
      return dicts;
    }
    return [];
  }
}
export const dictService = new DictService();
