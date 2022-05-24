import styled from 'styled-components';
export const ButtonWrapper = styled.li`
    border-radius:1.75rem;
    cursor:pointer;
    font-size:1.8rem;
    padding:1rem 1.5rem;
    text-align:center;
    &:focus,
    &:hover{
        transform:scaleX(.95);    
    }
    &.primary{
        background-color:${({theme}) => theme.colors.primary};
        color:${({theme}) => theme.colors.background};
        transition:.2s linear background-color, .2s linear transform;
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.secondary};
        }    
    }
    &.secondary{
        border:.25rem solid ${({theme}) => theme.colors.primary};
        color:${({theme}) => theme.colors.primary};
        transition: .2s linear transform;
        
    }
    
`
export const HeroWrapper = styled.header`
    align-items:center;
    display:flex;
    justify-content:center;
    padding:5rem 0;
    & > section{
        max-width:95%;
        text-align:center;
        width:80rem;
        & > h1{
            font-size:6.5rem;
            padding:.25rem;
            @media only screen{
                @media (max-width:650px){
                    font-size:5.5rem;
                }
            }
        }
        & > p{
            font-size:1.9rem;
            font-weight:600;
            line-height:calc(1.9rem * 2);
            padding:.25rem 1.25rem;
        }
    }

`
export const Section = styled.section`
    max-width:90%;
    width:78rem;
    h2{
        color:${({theme}) => theme.colors.secondary};
        font-size:3.5rem;
        padding:.5rem .85rem;
        @media only screen{
            @media (max-width:650px){
                font-size:2.8rem;
            }
        }
    }
    p{
        font-size:1.8rem;
        line-height:calc(1.8rem * 2);
        padding:.85rem;
        text-indent:2rem;
    }
    .buttons{
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        padding:1rem .5rem;
        gap:1rem;
        justify-content:center;
    }
    .list{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        margin:.25rem auto;
        max-width:95%;
        row-gap:.5rem;
        width:50rem;
        li{
            list-style:square;
            width:100%;
            h3{
                font-size:2rem;
                font-weight:500;
                padding:.45rem;
            }
        }
    }
`