import { MouseEventHandler } from 'react';
export interface IntItem {
    handle:MouseEventHandler;
    handleExpand:MouseEventHandler;
    isExpand:boolean;
    isMain:boolean;
    isSubmenu:boolean;
    path:string;
    title:string;
}