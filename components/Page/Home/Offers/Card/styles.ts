import styled from 'styled-components';
export const CardWrapper = styled.li`
    align-items:flex-start;
    color:${({theme}) => theme.colors.color};
    display:flex;
    flex-flow:column;
    justify-content:center;
    padding:.95rem 1.1rem;
    text-align:start;
    row-gap:1rem;
    & > *:not(div){
        width:100%;
    }
    & > h3{
        color:${({theme}) => theme.colors.tertiary};
        font-size:3rem;
        word-wrap:break-word;
        font-weight:500;
    }
    & > p{
        color:${({theme}) => theme.colors.gray};
        font-size:1.7rem;
        line-height:1.7;
    }
    & > div{
        padding:.85rem .75rem;
        & > a{
            align-items:center;
            color:${({theme}) => theme.colors.tertiary};
            display:flex;
            font-size:2.1rem;
            font-weight:700;
            justify-content:center;
            position:relative;
            z-index:0;
            &::before{
                background-color:${({theme}) => theme.colors.tertiary};
                border-radius:.85rem;
                bottom:0;
                height:.15rem;
                left:0;
                transition:.2s linear width;
                width:0%;
                z-index:-1;
            }
            &:focus,
            &:hover{
                &::before{
                    width:110%;
                }
            }
        }
    }
    @media only screen{
        @media (max-width:680px){
            align-items:center;
            justify-content:center;
            row-gap:.5rem;
            text-align:center;
        }
        @media (max-width:480px){
            & > h2{
                font-size:2.2rem;
                font-weight:500;
            }
            & > p {
                font-size:1.55rem;
                line-height:1.6;
            }
            & > div{
                & > a{
                    font-size:1.7rem;
                    padding:.65rem 1.35rem;
                }
            }
        }
    }
`