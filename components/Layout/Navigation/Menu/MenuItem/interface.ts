import { MouseEventHandler } from "react";
export interface IntMenuItem {
    handle:MouseEventHandler;
    isExpand?:boolean;
    isMain?:boolean;
    path:string;
    title:string;
}