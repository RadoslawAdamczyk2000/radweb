import styled from 'styled-components';
export const InputWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:2rem auto;
    max-width:90%;
    row-gap:.75rem;
    width:50rem;
    & > label{
        font-size:2rem;
        font-weight:700;
    }
    & > input{
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:.85rem;
        color:${({theme}) => theme.colors.primary};
        font-size:1.8rem;
        font-weight:500;
        line-height:2.8rem;
        padding:2rem 4rem;
        text-align:center;
        transition:.2s linear box-shadow,.2s linear color;
        width:100%;
        &:focus{
            box-shadow:inset 0 0 .2rem .25rem ${({theme}) => theme.colors.color},inset 0 0 2rem ${({theme}) => theme.colors.background};
            color:${({theme}) => theme.colors.color};
        }
        @media only screen and (max-width:650px){
            padding:1.5rem 1rem;
        }
    }
`