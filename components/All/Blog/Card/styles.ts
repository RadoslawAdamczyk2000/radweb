import styled from 'styled-components';
export const CardWrapper = styled.li`
    max-width:95%;
    width:45rem;
    @media only screen {
        @media (max-width:980px){
            width:40rem;
        }
        @media (max-width:900px){
            width:35rem;
        }
        @media (max-width:725px){
            width:32rem;
        }
        @media (max-width:665px){
            width:30rem;
        }
        @media (max-width:621px){
            width:50rem;
        }
    }
    & > a{
        width:100%;
        & > figure{
            aspect-ratio:4/3;
            overflow:hidden;
            position:relative;
            width:100%;
            & > div{
                filter:brightness(90%);
                height:100%;
                position:relative;
                transition:.2s linear filter,.2s linear transform;
                width:100%;
            }
        }
        & > figcaption{
            align-items:center;
            display:flex;
            flex-flow:column;
            padding:.5rem 0;
            row-gap:.25rem;
            & > * {
                width:100%;
            }
            & > .info{
                align-items:start;
                border-radius:.65rem;
                display:flex;
                flex-flow:row wrap;
                justify-content:space-between;
                padding:.25rem .75rem;
                color:${({theme}) => theme.colors.color};
                text-align:end;
                    & > * {
                        opacity:.75;
                        transition:.2s linear opacity;
                    }
                    a:focus,
                    a:hover{
                        opacity:.95;
                    }
                    @media only screen {
                        @media (max-width:290px){
                            align-items:center;
                            justify-content:center;
                            text-align:center;

                        }
                    }
                }
            }
            & > .title{
                color:${({theme}) => theme.colors.color};
                font-size:2.1rem;
                font-weight:700;
                padding:0 .5rem;
                text-align:center;
                transition:.2s linear color;
                @media only screen {
                    @media (max-width:430px){
                        font-size:1.9rem;
                        font-weight:600;
                    }
                }
            }
            & > .excerpt{
                color:${({theme}) => theme.colors.gray};
                font-size:1.65rem;
                line-height:calc(1.65rem * 2);
                padding:.85rem;
                text-align:start;
                @media only screen {
                    @media (max-width:430px){
                        font-size:1.55rem;
                        line-height:calc(1.55rem * 1.75);
                    }
                }
            }
        }


    &:focus,
    &:hover{
        & > a{
            & > figure{
                & > div{
                    filter:brightness(110%);
                    transform:scale(1.2);
                }
            }
            & > figcaption {
                & > .title{
                    color:${({theme}) => theme.colors.tertiary};
                }
            }
        }
    }

`