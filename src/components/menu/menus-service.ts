import { Crumb, MenuTypeEnum, ResponseCodeEnum, SysMenu, useHttpClient } from "pf-component";
class MenusService {
  menus: SysMenu[] = [
    {
      menuId: "workbench",
      menuName: "工作台 ",
      menuType: MenuTypeEnum.LINK,
      menuUrl: "/main/workbench",
      children: []
    },
    {
      menuId: "system",
      menuName: "系统管理",
      menuType: MenuTypeEnum.LINK,
      menuUrl: "/main",
      menuIcon: "el-icon-setting",
      children: [
        {
          menuId: "tenant",
          menuName: "租户管理",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/tenant",
          children: []
        },
        {
          menuId: "user",
          menuName: "用户管理",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/user",
          children: []
        },
        {
          menuId: "post",
          menuName: "岗位管理",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/post",
          children: []
        },
        {
          menuId: "role",
          menuName: "角色配置",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/role",
          children: []
        },
        {
          menuId: "dict",
          menuName: "系统字典",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/dict",
          children: []
        }
      ]
    },
    {
      menuId: "page-config",
      menuName: "页面配置",
      menuType: MenuTypeEnum.LINK,
      menuUrl: "/main/page-config",
      menuIcon: "el-icon-tickets",
      children: [
        {
          menuId: "meta-data",
          menuName: "元数据管理",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/page-config/meta-data",
          children: []
        },
        {
          menuId: "form",
          menuName: "表单配置",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/page-config/form",
          children: []
        },
        {
          menuId: "table",
          menuName: "表格配置",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/page-config/table",
          children: []
        },
        {
          menuId: "layout",
          menuName: "布局配置",
          menuType: MenuTypeEnum.LINK,
          menuUrl: "/main/page-config/layout",
          children: []
        }
      ]
    },
    {
      menuId: "help",
      menuName: "帮助",
      menuType: MenuTypeEnum.LINK,
      menuUrl: "/main/help",
      menuIcon: "el-icon-question",
      children: []
    },
    {
      menuId: "test",
      menuName: "测试",
      menuType: MenuTypeEnum.LINK,
      menuUrl: "/main/test",
      menuIcon: "el-icon-edit",
      children: []
    }
  ];
}

export const menusService = new MenusService();
