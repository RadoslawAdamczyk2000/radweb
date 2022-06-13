import { createGlobalStyle} from "styled-components";
export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
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
        background-color:${({theme}) => theme.colors.background};
        color:${({theme}) => theme.colors.color};
        font-family:${({theme}) => theme.fonts.family.regular};
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