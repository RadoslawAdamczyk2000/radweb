import styled from 'styled-components';
export const ButtonWrapper = styled.button`
    background-color:black;
    border-radius:2.5rem;
    color:white;
    font-size:1.85rem;
    margin:.75rem auto;
    padding:1.25rem 2.5rem;
    transition:.2s linear background-color, .2s linear color, .2s linear transform;
    &:focus,
    &:hover{
        background-color:red;
        color:white;
        transform:scaleX(.95);
    }
    @media only screen{
        @media (min-width:1500px){
            border-radius:3.5rem;
            font-size:2.15rem;
            font-weight:700;
            padding:1.5rem 3.1rem;
        }
    }
`
export const ContentWrapper = styled.div`
    text-align:center;
    & > h3{
        font-size:3rem;
        @media only screen{
            @media (min-width:1500px){
                font-size:3.5rem;
            }
            @media (max-width:900px){
                font-size:4rem;
            }
            @media (max-width:500px){
                font-size:2.5rem;
            }
        }
    }
    & > p{
        padding:1rem;
        line-height:calc(1.6rem * 2);
        @media only screen{
            @media (min-width:1500px){
                font-size:2.15rem;
                line-height:calc(2.15rem * 1.5);
            }
            @media (max-width:900px){
                font-size:1.55rem;
            }
            @media (max-width:500px){
                line-height:calc(1.5rem * 2);
                font-size:1.5rem;
            }
        }
    }
`
export const FieldWrapper = styled.div`
    align-items:center;
    background-color:white;
    display:flex;
    justify-content:center;
    position:relative;
    width:95%;
    @media only screen {
        @media (max-width:600px){
            width:90%;
        }
    }
    & > input{
        height:100%;
        font-size:1.8rem;
        font-weight:600;
        padding:1.5rem 2rem;
        width:100%;
        @media only screen {
            @media (max-width:600px){
                font-size:1.7rem;
                padding:1.25rem 1.5rem;
            }
        }
        &:focus{
            & + span{
                background-color:purple;
            }
            &:invalid{
            & + span{
                background-color:red;
            }
            }
            &:valid{
                & + span{
                    background-color:blue;
                }
            }
        }
        &::placeholder{
            color:inherit;
            opacity:.95;
            font-weight:800;
        }
    }
    & > span{
        background-color:lime;
        bottom:0;
        left:0;
        height:.4rem;
        position:absolute;
        transition:.15s ease-in-out background-color;
        width:100%;
        @media only screen {
            @media (max-width:600px){
                height:.3rem;
            }
        }
    }
`
export const NewsletterWrapper = styled.div`
    width:99%;
    &,
    & > form{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        row-gap:.5rem;
    }
    & > form{
        row-gap:1.5rem;
        width:100%;
    }
    @media only screen {
        @media (max-width:950px){
            align-items:center;
            justify-content:center;
            display:flex;
            flex-flow:column;
            max-width:95%;
            width:50rem;
        }
    }
`