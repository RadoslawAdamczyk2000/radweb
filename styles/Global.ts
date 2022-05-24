import { createGlobalStyle} from "styled-components";
export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap');
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
        background-color:${({theme}) => theme.colors.quatenary};
        color:${({theme}) => theme.colors.headings.title};
    }
    a{
        color:inherit;
        text-decoration:none;
    }
    body{
        background-color:${({theme}) => theme.colors.background};
        color:${({theme}) => theme.colors.color};
        font-family: 'Catamaran', sans-serif;
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
        &.densely > section {
            margin:1rem auto;
        }
        @media only screen {
            @media (max-width:1500px){
                width:90%;
            }
        }
    }
    button,
    input,
    textarea{
        background:none;
        border:none;
        font-family: 'Catamaran', sans-serif;
        outline:none;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`