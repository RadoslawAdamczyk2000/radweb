import { createGlobalStyle} from "styled-components";
export const Global = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
        scroll-behavior:smooth;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    ::selection{
    }
    a{
        color:inherit;
        text-decoration:none;
    }
    body{
        font-size:1.6rem;
        font-weight:400;
        transition:.35s linear background-color,.35s linear color;
    }
    button{
        cursor:pointer;
    }
    html{
        font-size:62.5%;
    }
    button,
    input,
    textarea{
        background:none;
        border:none;
        outline:none;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`