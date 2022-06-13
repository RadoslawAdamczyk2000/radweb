import { MouseEventHandler } from "react";
export interface IntSubmenu{
    handle:MouseEventHandler;
    handleExpand:MouseEventHandler;
    path:string;
    submenu:IntSubmenuMap[];
    title:string;
}
export interface IntSubmenuMap{
    path:string;
    title:string;
}