import { DetailedHTMLProps, FormEventHandler, KeyboardEventHandler, MouseEventHandler, ReactChild, ReactElement, ReactText } from "react"
import { TypeTags } from "./types";
export interface IntBlog {
    button:string,
    children:ReactElement[]|ReactElement|Array<any>|undefined,
    content:ReactText,
    isHome:boolean,
    path:string,
    title:string
}
export interface IntBlogCard {
    date:string,
    image:string,
    isHome:boolean,
    path:string,
    title:string
}
export interface IntCite {
    author:string,
    cite:string
}
export interface IntCode {
    children:any
}
export interface IntContentArticle {
    children:ReactChild|string|string[],
    isExcerpt:boolean,
}
export interface IntContentPage {
    button?:string,
    content:ReactText,
    imagePath?:string,
    imageTitle?:string,
    isVertical?:boolean,
    movie?:boolean,
    moviePath?:string,
    path?:string,
    primary:boolean,
    title:string,
    withMedia?:boolean
}
export interface IntDate {
    children:ReactText
}
export interface IntFaqCard {
    content:string|undefined,
    title:string
}
export interface IntHeroPage {
    content:ReactText,
    image:string,
    imageTitle:string,
    isHome:boolean,
    handle?:KeyboardEventHandler|MouseEventHandler|FormEventHandler,
    nameSearch?:string, 
    title:string,
}
export interface IntHobbies {
    hobbies:any[]
}
export interface IntImgArticle {
    image:string,
    isMain:boolean,
    title:string
}
export interface IntMenu {
    isFooter:boolean,
    handleOffer:MouseEventHandler,
    handleClose?:MouseEventHandler,
    offer?:boolean
}
export interface IntMenuButton{
    active:boolean,
    handleMenuButton:MouseEventHandler,
}
export interface IntMenuItem{
    isExpand:boolean,
    isMain:boolean,
    isSubmenu:boolean,
    handle?:MouseEventHandler,
    path:string,
    title:string
}
export interface IntNavigation {
    setTheme:MouseEventHandler,
    theme:boolean
}
export interface IntOfferCard {
    button?:boolean,
    content:string,
    image?:string,
    isHome:boolean,
    path?:string,
    price?:number,
    title:string
}
export interface IntOffers {
    children?:ReactElement|ReactElement[],
    isHome:boolean,
}
export interface IntOptions {
    active:boolean,
    handleMenuButton:MouseEventHandler,
    handleThemeButton:MouseEventHandler,
    isLight:boolean
}
export interface IntProjectCard {
    excerpt?:string,
    image:string,
    imageTitle:string,
    isHome:boolean,
    path:string,
    socials:ReactElement[]|undefined|any,
    title:string
}
export interface IntProjects {
    button?:string,
    children:ReactElement[]|ReactElement,
    content?:ReactText,
    isHome:boolean,
    path?:string,
    title?:string,
}
export interface IntSearch {
    handle:FormEventHandler,
    name:string|undefined 
 }
export interface IntSeo{
    canonical?:string,
    description:string,
    image:string,
    robots?:string,
    title:string,
    typePage?:string
}
export interface IntSources {
    sources:string[]
}
export interface IntSubmenu {
    children:ReactElement|ReactElement[],
    cards:boolean|undefined,
    handle:MouseEventHandler|undefined,
    path:string,
    title:string
}
export interface IntTags {
    tags:TypeTags,
    tech:boolean
}
export interface IntThemeButton{
    handleThemeButton:MouseEventHandler,
    isLight:boolean
}
export interface IntTitleArticle{
    isH2?:boolean,
    isH3?:boolean,
    isH4?:boolean,
    main?:boolean,
    title:string
}