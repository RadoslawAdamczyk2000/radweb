import styled from 'styled-components';
export const ContentWrapper = styled.div`
    & > section{
        align-items:flex-end;
        display:flex;
        flex-flow:column;
        justify-content:flex-end;
        padding:.85rem .65rem;
        row-gap:1rem;
        text-align:end;
        & > h2{
            color:${({theme}) => theme.colors.primary};
            font-size:3.85rem;
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

    @media only screen {
        @media (min-width:1450px){
            & > section {
                row-gap:2rem;
                & > h2{
                    font-size:4.95rem;
                }
                & > p{
                    font-size:2.2rem;
                    line-height:2;
                }
                & > div{
                    & > a{
                        font-size:3.5rem;
                    }
                }
            }
        }
    }
`