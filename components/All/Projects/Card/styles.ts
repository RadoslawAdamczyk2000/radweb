import styled from 'styled-components';
export const CardWrapper = styled.li`
    background-color:${({theme}) => theme.colors.gray};
    flex-shrink:0;
    height:28rem;   
    max-height:auto;
    max-width:95%;
    width:53rem;
    @media only screen {
        @media (max-width:400px) {
            height:40rem;
        }
        @media (max-width:260px) {
            height:50rem;
        }
        @media (max-width:220px) {
            height:65rem;
        }
    }   
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
        position:relative;
        z-index: 0;
        &,
        & > * {
            height:100%;
            width:100%;
        }
        & > figure{
            overflow:hidden;
            & > div{
                height:100%;
                position:relative;
                transition:.2s .2s linear transform;
                width:100%;
            }
        }
        & > figcaption{
            align-items:end;
            background-color:hsla(0,100%,0%,.65);
            color:#fff;
            display:flex;
            flex-flow:column;
            justify-content:center;
            left:0;
            opacity:0;
            padding:2rem;
            position:absolute;
            row-gap:.5rem;
            top:0;
            transition:.2s linear opacity,.2s linear visibility;
            visibility:hidden;
            @media only screen {
                @media (max-width:750px) {
                    opacity:95;
                    visibility:visible;
                }
            }
            & > * {
                width:100%;
            }
            & > .title{
                font-size:2.5rem;
                font-weight:500;
            }
            & > .stacks {
                flex-flow:row wrap;
                justify-content:flex-start;
                &,
                & > *{
                    align-items:center;
                    display:flex;
                }
                & > .stack{
                    font-size:2.25rem;
                    height:2.5rem;
                    justify-content:center;
                    width:2.5rem;
                }
            }
            & > .excerpt {
                font-size:1.5rem;
                line-height:calc(1.5rem * 1.75);
                padding:.75rem;
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figure{
                & > div{
                    transform:scale(1.2);
                }
            }
            & > figcaption{
                opacity:1;
                visibility:visible;
            }
        }
    }
`