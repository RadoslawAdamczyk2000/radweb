import { MouseEventHandler, ReactElement } from "react";
export interface IntBlogCard {
    date:number|string;
    image:string;
    link:string;
    tags:any[];
    title:string;
}
export interface IntLayout {
    children:any;
}
export interface IntMenuButton {
    isActive:boolean;
    handle:MouseEventHandler;
}
export interface IntMenuItem {
    isExpand?:boolean;
    isMain?:boolean;
    isSubmenu?:boolean;
    handle:MouseEventHandler;
    handleExpand?:MouseEventHandler;
    path:string;
    title:string;
}
export interface IntNavigation {
    isArticle?:boolean;
}
export interface IntNavigationOptions {
    isActive:boolean;
    isLight:boolean;
    menuHandle:MouseEventHandler;
    themeHandle:MouseEventHandler;
}
export interface IntOptionsHeroHome {
    handleNext:MouseEventHandler;
    handlePrev:MouseEventHandler;
    slide:number;
}
export interface IntSlideHomePage {
    button:string;
    content:string;
    image:string;
    link:string;
    title:string;
}
export interface IntSubmenu {
    handle:MouseEventHandler;
    path:string;
    submenu:ReactElement[]|any[];
    title:string;
}
export interface IntThemeButton {
    handle:MouseEventHandler;
    isLight:boolean;
}