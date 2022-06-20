import { ReactElement } from "react";
export interface IntSocial extends Color{
    icon:ReactElement;
    path:string;
    title:string;
}
export interface Color {
    color:string;
}