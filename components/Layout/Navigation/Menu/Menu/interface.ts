import { IntSubmenuMap } from "../Submenu/interface";
export interface IntMenuMap extends IntSubmenuMap{
    isExpand:boolean;
    submenu?:IntSubmenuMap[];
}

export interface IntMenuLocales {
    isExpand:boolean;
    path:string;
    submenu?:IntSubmenuMap[];
    title:string;
}