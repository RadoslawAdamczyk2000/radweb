import styled from 'styled-components';
export const BlogWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:column;
    margin:3rem auto;
    row-gap:2rem;
    width:70%;
    & > * {
        width:100%;
    }
    & > section{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        row-gap:2rem;
        padding:1rem 0;
        text-align:center;
        & > h2{
            color:${({theme}) => theme.colors.primary};
            font-size:5.85rem;
            font-weight:500;
            width:100%;
        }
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.8rem;
            line-height:2.1;
            padding:.25rem;
        }
        & > div{
            &,
            & > a {
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > a {
                color:${({theme}) => theme.colors.primary};
                font-size:3rem;
                min-height:4rem;
                min-width:12rem;
                padding:.75rem 1.35rem;
                position:relative;
                transition:.12s linear color;
                & > span{
                    background-color:${({theme}) => theme.colors.primary};
                    position:absolute;
                    transition:.12s linear background-color;
                    &:nth-of-type(even){
                        left:0;
                        height:.2rem;
                        width:100%;
                    }
                    &:nth-of-type(odd){
                        top:0;
                        height:100%;
                        width:.2rem;
                    }
                    &:nth-of-type(1){
                        left:0;
                    }
                    &:nth-of-type(2){
                        top:0;
                    }
                    &:nth-of-type(3){
                        right:0;
                    }
                    &:nth-of-type(4){
                        bottom:0;
                    }
                }
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.secondary};
                    & > span{
                        background-color:${({theme}) => theme.colors.secondary};
                    }
                }
            }
        }
    }
    & > ul{
        align-content:center;
        display:grid;
        justify-items:center;
        grid-row-gap:1.5rem;
        grid-template-columns:repeat(2,1fr);
        padding:.85rem .25rem;
    }
    @media only screen {
        @media (max-width:1140px){
            width:90%;
        }
        @media (max-width:680px){
            width:99%;
        }
        @media (max-width:650px){
            width:99%;
            & > ul{
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`