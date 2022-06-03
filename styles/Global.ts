import { createGlobalStyle} from "styled-components";
export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@470&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('http://fonts.cdnfonts.com/css/x-heighting?styles=55495');
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
        background-color:${({theme}) => theme.colors.primary};
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