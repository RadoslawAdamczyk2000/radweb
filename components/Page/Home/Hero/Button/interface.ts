import { MouseEventHandler } from "react";
export interface IntButton {
    handle:MouseEventHandler;
    isLeft?:boolean;
    isRight?:boolean;
}