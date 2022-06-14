interface submenu {
    path:string;
    title:string;
}
interface menu extends submenu{
    isExpand:boolean;
    submenu?:submenu[];
}
export interface IntMenu {
    pl:menu[];
    pt:menu[];
    fr:menu[];
    en:menu[];
    es:menu[];
    de:menu[];
}