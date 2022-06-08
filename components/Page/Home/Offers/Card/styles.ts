import styled from 'styled-components';
export const CardWrapper = styled.div`
    aspect-ratio:10/5;
    width:100%;
    position:relative;  
    width:85%;
    @media only screen {
        @media (max-width:1090px){
            width:95%;
        }
        @media (max-width:500px){
            aspect-ratio:auto;
            min-height:35rem;
            width:98%;
        }
        @media (max-width:300px){
            min-height:45rem;
        }
        @media (max-width:230px){
            min-height:50rem;
        }
    }
    & > * {
        height:100%;
        width:100%;
    }
    & > figure{
        position:relative;
        @media only screen {
            @media (max-width:500px){
                min-height:35rem;
            }
            @media (max-width:300px){
                min-height:45rem;
            }
            @media (max-width:230px){
                min-height:50rem;
            }
        }
    }
    & > figcaption{
        align-items:flex-end;
        background-color:${({theme}) => theme.colors.offer.color};
        display:flex;
        flex-flow:column;
        justify-content:center;
        padding:.85rem 1rem;
        position:absolute;
        row-gap:.5rem;
        text-align:end;
        transition:.2s ease-in-out background-color;
        top:0;
        @media only screen {
            @media (max-width:500px){
                padding:1.85rem .5rem;
            }
        }
        & > h3{
            color:${({theme}) => theme.colors.color};
            font-size:2.75rem;
            @media only screen {
                @media (max-width:950px){
                    font-size:2.25rem;
                }
            }
        }
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.65rem;
            line-height:calc(1.65rem * 2);
            padding:.5rem;
            @media only screen {
                @media (max-width:950px){
                    font-size:1.55rem;
                    line-height:calc(1.55rem * 1.6);
                }
            }
        }
        & > div{
            & > a {
                align-items:center;
                background-color:${({theme}) => theme.colors.color};
                border-radius:5rem;
                color:${({theme}) => theme.colors.background};
                display:flex;
                font-size:1.8rem;
                justify-content:center;
                padding:.55rem 2.65rem;
                position:relative;
                transition:.2s linear background-color,.2s linear color,.2s linear transform;
                &:focus,
                &:hover{
                    background-color:${({theme}) => theme.colors.background};
                    color:${({theme}) => theme.colors.color};
                    transform:scaleX(.9);
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > figcaption{
            background-color:${({theme}) => theme.colors.offer.hover};
        }
    }
`