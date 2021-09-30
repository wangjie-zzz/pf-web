import { SysDict } from "@/model/SysDict";
import { Options } from "@/model/entity/FormModel";
import { UseStateEnum } from "@/constants/enum/use-state.enum";
import { authService } from "@/services/auth-service";

export function useDict() {
  const convertDict = (name: string, code: string): string => {
    if (name) {
      const dicts: SysDict[] =
        authService
          .getDict()
          .filter(d => d.dictField === name)
          .filter(d1 => d1.dictKey === String(code)) || [];
      if (dicts.length > 0) return dicts[0].dictValue;
    }
    return code;
  };
  const convertOptions = (dict: string): Options[] => {
    if (!dict) return [];
    return authService
      .getDict()
      .filter(d => d.dictField === dict)
      .map(d1 => {
        return {
          key: d1.dictKey,
          value: d1.dictValue,
          disabled: d1.dictUseState !== UseStateEnum.VAILD.code
        };
      });
  };
  return { convertDict, convertOptions };
}
