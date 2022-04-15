import { createGlobalStyle} from "styled-components";
export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
        background-color:${({theme}) => theme.colors.tertiary};
        color:${({theme}) => theme.colors.background};
    }
    a{
        color:inherit;
        text-decoration:none;
    }
    body{
        background-color:${({theme}) => theme.colors.background};
        color:${({theme}) => theme.colors.color};
        font-family:${({theme}) => theme.fonts.family.primary};
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
    main{
        .big{
            width:99%;
        }
        .larger{
            width:90%;
        }
        margin:4rem auto;
        padding:1rem 0;
        width:85%;
        & > section{
            margin:8rem auto;
        }
    }
    button,
    input,
    textarea{
        background:none;
        border:none;
        font-family:${({theme}) => theme.fonts.family.primary};
        outline:none;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`