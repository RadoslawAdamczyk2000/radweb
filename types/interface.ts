import { DetailedHTMLProps, MouseEventHandler, ReactChild, ReactElement, ReactText } from "react"
export interface IntCite {
    author:string,
    cite:string
}
export interface IntCode {
    children:ReactChild
}
export interface IntContentArticle {
    children:ReactChild,
    isExcerpt:boolean,
}
export interface IntDate {
    children:ReactText
}
export interface IntImgArticle {
    article:string,
    image:string,
    isMain:boolean,
    title?:string
}
export interface IntSources {
    sources:string[]
}
export interface IntTitleArticle{
    isH2:boolean,
    isH3:boolean,
    isH4:boolean,
    main:boolean,
    title:string
}
export interface IntMenuButton{
    active:boolean,
    handleMenuButton:MouseEventHandler
}
export interface IntMenuItem{
    isExpand:boolean,
    isMain:boolean,
    isSubmenu:boolean,
    path:string,
    title:string
}
export interface IntThemeButton{
    handleThemeButton:MouseEventHandler,
    isLight:boolean
}
export interface IntSubmenu {
    children:ReactElement|ReactElement[],
    path:string,
    title:string
}
export interface IntMenu {
    isFooter:boolean
}
export interface IntSeo{
    canonical?:string,
    description:string,
    image:string,
    robots?:string,
    title:string,
    typePage?:string
}