export interface IntContent {
    content:string;
}
export interface IntContentPage extends IntContent {
    isCenter?:boolean;
    isPrimary?:boolean;
    isSecondary?:boolean;
    isTertiary?:boolean;
}