import styled from 'styled-components';
export const CardWrapper = styled.li`
    background-color:#fff;
    border-radius:1rem;
    transition:.15s ease-in-out transform;
    max-width:95%;
    width:40rem;
    & > a {
        flex-flow:column;
        height:100%;
        padding:2rem .75rem;
        row-gap:1rem;
        &,
        & > *{
            width:100%;
        }
        &,
        & > h2,
        & > ul,
        & > ul > li{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > h2 {
            color:red;
            font-size:3.1rem;
            position:relative;
            text-align:center;
            transition:.15s ease-in-out color;
            @media only screen {
                @media (max-width:350px){
                    font-size:2.6rem;
                }
            }
            &::before {
                background-color:red;
                border-radius:2rem;
                bottom:.25rem;
                height:.35rem;
                transition:.15s ease-in-out background-color;
                width:85%;
                @media only screen {
                    @media (max-width:350px){
                        width:95%;
                    }
                }
            }
        }
        & > p{
            font-size:1.65rem;
            line-height:calc(1.65rem * 2);
            text-align:center;

        }
        & > ul{
            gap:.85rem;
            padding:.25rem .75rem;
            & > li {
                color:#333;
                font-size:2rem;
                height:2.5rem;
                transition:.2s linear color;
                width:2.5rem;
            }
        }
    }
    &:focus,
    &:hover{
        transform:scale(1.025);
        & > a {
            & > h2 {
                color:blue;
                &::before{
                    background-color:blue;
                }
            }
            & > ul {
                & >  li {
                    color:#000;
                }
            }
        }
    }
`