import { CgGoogle } from 'react-icons/cg';
import { RiGatsbyLine, RiReactjsLine } from 'react-icons/ri';
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiSass, SiStyledcomponents, SiTypescript } from 'react-icons/si';
export const stack = {
    html:{
        icon:<SiHtml5/>,
        title:'HTML'
    },
    css:{
        icon:<SiCss3/>,
        title:'CSS'
    },
    bootstrap:{
        icon:<SiBootstrap/>,
        title:'Bootstrap'
    },
    // tailwind:{
    //     icon:,
    //     title:'Tailwind'
    // },
    scss:{
        icon:<SiSass/>,
        title:'SCSS / SASS'
    },
    styled:{
        icon:<SiStyledcomponents/>,
        title:'Styled Components'
    },
    javascript:{
        icon:<SiJavascript/>,
        title:'JavaScript'
    },
    typescript:{
        icon:<SiTypescript/>,
        title:'TypeScript'
    },
    // angular:{
    //     icon:,
    //     title:'Angular'
    // },
    react:{
        icon:<RiReactjsLine/>,
        title:'React'
    },
    // vue:{
    //     icon:,
    //     title:'Vue'
    // },
    gatsby:{
        icon:<RiGatsbyLine/>,
        title:'GatsbyJS'
    },
    next:{
        icon:<SiNextdotjs/>,
        title:'NextJS'
    },
    // remix:{
    //     icon:,
    //     title:'RemixJS'
    // },
    // php:{
    //     icon:,
    //     title:'PHP'
    // },
    // mysql:{
    //     icon:,
    //     title:'MySQL'
    // },
    seo:{
        icon:<CgGoogle/>,
        title:'SEO - Search Engine Optimization'
    },
}   
export const stackArr = [
    {
        icon:stack.html.icon,
        title:stack.html.title
    },
    {
        icon:stack.css.icon,
        title:stack.css.title
    },
    {
        icon:stack.bootstrap.icon,
        title:stack.bootstrap.title
    },
    // tailwind:{
    //     icon:,
    //     title:'Tailwind'
    // },
    {
        icon:stack.scss.icon,
        title:stack.scss.title
    },
    {
        icon:stack.styled.icon,
        title:stack.styled.title
    },
    {
        icon:stack.javascript.icon,
        title:stack.javascript.title
    },
    {
        icon:stack.typescript.icon,
        title:stack.typescript.title
    },
    // angular:{
    //     icon:,
    //     title:'Angular'
    // },
    {
        icon:stack.react.icon,
        title:stack.react.title
    },
    // vue:{
    //     icon:,
    //     title:'Vue'
    // },
    {
        icon:stack.gatsby.icon,
        title:stack.gatsby.title
    },
    {
        icon:stack.next.icon,
        title:stack.next.title
    },
    //{
    //     icon:,
    //     title:'RemixJS'
    // },
    //{
    //     icon:,
    //     title:'PHP'
    // },
    //{
    //     icon:,
    //     title:'MySQL'
    // },
    {
        icon:stack.seo.icon,
        title:stack.seo.title
    },   
]