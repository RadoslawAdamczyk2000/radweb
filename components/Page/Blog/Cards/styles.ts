import styled from 'styled-components';
export const Cards = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    gap:1.5rem;
`
export const CardWrapper = styled.li`
    position:relative;
    max-width:95%;
    width:40rem;
    @media only screen {
        @media (max-width:1110px){
            width:30rem;
        }
        @media (max-width:675px){
            width:25rem;
        }
        @media (max-width:540px){
            width:45rem;
        }
    }
    & > a{
        align-items:center;
        display:flex;
        flex-flow:column;
        height:100%;
        &,
        & > *{
            width:100%;
        }
        & > figure{
            aspect-ratio:16/9;
            filter:brightness(95%) saturate(45%);
            position:relative;
            transition:.2s linear filter;
            /* max-height:25rem; */
        }
        & > figcaption{
            align-items:center;
            display:flex;
            flex-flow:column;
            padding:.25rem .5rem;
            & > * {
                width:100%;
            }
            & > .date{
                font-size:1.55rem;
                text-align:end;
            }
            & > .title{
                color:${({theme}) => theme.colors.headings.subtitle};
                font-size:2rem;
                text-align:center;
                transition:.2s linear color;
                @media only screen {
                    @media (min-width:1450px){
                        font-size:3rem;
                    }
                }
            }
            & > .content{
                color:${({theme}) => theme.colors.color};
                font-size:1.65rem;
                line-height:calc(1.65rem * 2);
                padding:.25rem;
                @media only screen {
                    @media (min-width:1450px){
                        font-size:1.75rem;
                        line-height:calc(1.8rem * 2);
                    }
                }
            }
            & > .tags{
                align-items:center;
                display:flex;
                flex-flow:row wrap;
                gap:.85rem;
                justify-content:center;
                padding:.15rem .25rem;
                & > .tag{
                    background-color:${({theme}) => theme.colors.color};
                    color:white;
                    border-radius:1.5rem;
                    padding:.25rem 1.75rem;
                    transition:.2s linear background-color;
                    user-select:none;
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figure{
                filter:brightness(155%) saturate(100%);
            }
            & > figcaption{
                & > .title{
                    color:${({theme}) => theme.colors.primary};
                }
                & > .tags > .tag{
                    background-color:${({theme}) => theme.colors.secondary};
                }
            }
        }
    }

`
