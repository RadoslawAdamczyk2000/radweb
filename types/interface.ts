import React, { FormEventHandler, MouseEventHandler, ReactChild, ReactElement, ReactText } from "react";
export interface IntAboutMeText {
    content:string;
    heading?:string;
    path?:string;
}
export interface IntAlert {
    answerCorrect:string;
    answerError:string;
    isCorrect:boolean;
}
export interface IntBlogCard {
    date:number|string;
    image:string;
    link:string;
    tags:any[];
    title:string;
}
export interface IntBlogCardPage extends IntBlogCard {
    content:string;
}
export interface IntButtonLocation {
    path:string;
    primary:boolean;
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
export interface IntCityCard {
    city:string;
    link:string;
}
export interface IntContactField extends IntField{
    handle:FormEventHandler;
    id:string;
    placeholder:string;
}
export interface IntContactMessageField {
    handle:FormEventHandler;
    id:string;
    placeholder:string;
    title:string;
}
export interface IntContactItemFooter {
    icon:ReactElement;
    link:string;
}
export interface IntFaqCard {
    content:string;
    title:string;
}
export interface IntField {
    pattern?:string;
    title:string;
    type?:string;
}
export interface IntHeroArticle {
    children:ReactChild;
    date:string|number;
    image:string;
    path:string;
    stack?:any[];
    title:string;
}
export interface IntHeroLocation {
    city:string;
    dat:string;
    loc:string;
}
export interface IntHeroPage extends IntSearch {
    content:string;
    image:string;
    isVertical?:boolean;
    title:string;
    withImage?:boolean;
    withSearch?:boolean;
}
export interface IntLayout extends IntSeo {
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
export interface IntMovieAbout {
    movie:string;
    movieTitle:string;
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
export interface IntNewsletterField extends IntField {
    id:string;
    min:number;
    name:string;
}
export interface IntOfferCard {
    button?:string;
    content:string;
    isMain:boolean;
    link?:string;
    title:string;
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
export interface IntPictureAbout {
    image:string;
    title:string;
}
export interface IntProjectCard {
    content:string;
    image:string;
    link:string;
    stack:any[];
    title:string;
}
export interface IntProjectHomeCard extends IntProjectCard {
    image:string;
}
export interface IntReview {
    author:string;
    comment:string;
    image:string;
    rate:number;
}
export interface IntSectionLocation{
    city:string;
    dat?:string;
    loc?:string;
}
export interface IntSearch {
    handle?:FormEventHandler;
    placeholder?:string;
    title?:string;
}
export interface IntSeo{
    canonical?:string;
    description:string;
    image:string;
    robots?:string;
    title:string;
    typePage?:string;
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
export interface IntTagStack {
    icon:ReactElement;
    handle:any;
    title:string;
}
export interface IntThemeButton {
    handle:MouseEventHandler;
    isLight:boolean;
}