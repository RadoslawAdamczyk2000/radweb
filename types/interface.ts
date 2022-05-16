import React, { MouseEventHandler, ReactElement } from "react";
export interface IntBlogCard {
    date:number|string;
    image:string;
    link:string;
    tags:any[];
    title:string;
}
export interface IntCareerCard {
    company:string;
    description:string;
    end:string;
    index:number;
    job:string;
    start:string;
}
export interface IntCertificateCard{
    content:string;
    image:string;
    path:string;
    title:string;
    source:string;
}
export interface IntContactItemFooter {
    icon:ReactElement;
    link:string;
}
export interface IntHeroPage {
    content:string;
    image:string;
    isImage:boolean;
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
export interface IntNewsletterField {
    id:string;
    min:number;
    name:string;
    pattern:string;
    title:string;
    type:string;
}
export interface IntOfferCardHome {
    content:string;
    id:number;
    image:string;
    link:string;
    title:string;
}
export interface IntOptionsHeroHome {
    handleNext:MouseEventHandler;
    handlePrev:MouseEventHandler;
    slide:number;
}
export interface IntProjectHomeCard {
    content:string;
    image:string;
    link:string;
    stack:any[];
    title:string;
}
export interface IntReview {
    author:string;
    comment:string;
    image:string;
    rate:number;
}
export interface IntSlideHomePage {
    button:string;
    content:string;
    image:string;
    link:string;
    title:string;
}
export interface IntSocial {
    icon:ReactElement;
    link:string;
    name:string;
}
export interface IntStackItemHome {
    icon:ReactElement;
    title:string;
}
export interface IntStepHome {
    content:string;
    index:string;
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