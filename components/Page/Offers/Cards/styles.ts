import styled from 'styled-components';

export const Cards = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:1rem;
    justify-content:center;
`

export const CardWrapper = styled.li`
    align-items:flex-start;
    border:.12rem solid red;
    border-radius:.85rem;
    display:flex;
    flex-flow:column;
    justify-content:start;
    max-width:99%;
    padding:1.5rem 2rem;
    row-gap:.85rem;
    width:45rem;
    @media only screen{
        @media (min-width:1450px){
            border:.18rem solid red;
        }
    }
    & > h2,
    & > h3{
        color:red;
        font-size:2.4rem;
        text-align:center;
        width:100%;
        @media only screen{
            @media (min-width:1450px){
                font-size:2.8rem;
            }
        }
    }
    & > p {
        color:#111;
        font-size:1.65rem;
        line-height:calc(1.65rem * 1.8);
        text-align:justify;
        width:100%;
        @media only screen{
            @media (min-width:1450px){
                font-size:1.85rem;
                line-height:calc(1.85rem * 2);
            }
        }
    }
    & > a{
        background-color:black;
        border-radius:1.25rem;
        color:white;
        margin:auto;
        padding:.5rem 2rem;
        transition:.2s linear background-color, .2s linear color, .2s linear transform;
        &:focus,
        &:hover{
            background-color:red;
            color:white;
            transform:scaleX(.95);
        }
        @media only screen{
            @media (min-width:1450px){
                border-radius:3.5rem;
                font-size:1.9rem;
                padding:.65rem 2.2rem;
            }
        }
    }
`