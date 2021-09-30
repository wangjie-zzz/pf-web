import { SysDict } from "@/model/SysDict";
import { Options } from "@/model/entity/FormModel";
import { UseStateEnum } from "@/constants/enum/use-state.enum";
import { authService } from "@/services/auth-service";
import { DictNameEnum } from "@/constants/enum/dict-name.enum";
/*
 * TODO dictKey需要转Number()，待后端调整为Integer
 * */
export function useDict() {
  const convertDict = (name: DictNameEnum, code: number): string => {
    if (name) {
      const dicts: SysDict[] =
        authService
          .getDict()
          .filter(d => d.dictField === name)
          .filter(d1 => Number(d1.dictKey) === code) || [];
      if (dicts.length > 0) return dicts[0].dictValue;
    }
    return String(code);
  };
  const convertOptions = (dict: DictNameEnum): Options[] => {
    if (!dict) return [];
    return authService
      .getDict()
      .filter(d => d.dictField === dict)
      .map(d1 => {
        return {
          key: Number(d1.dictKey),
          value: d1.dictValue,
          disabled: d1.dictUseState !== UseStateEnum.VAILD.code
        };
      });
  };
  return { convertDict, convertOptions };
}
