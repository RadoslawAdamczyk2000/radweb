import { MouseEventHandler } from "react";
export interface IntMenuItem {
    handle:MouseEventHandler;
    handleExpand?:MouseEventHandler;
    isExpand?:boolean;
    isMain?:boolean;
    isSubmenu?:boolean;
    path:string;
    title:string;
}