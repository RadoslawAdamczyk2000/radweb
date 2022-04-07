import styled from "styled-components";
export const OfferWrapper = styled.div`
    align-items:center;
    background-color:${({theme}) => theme.colors.secondary};
    border-radius:5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:8rem 3rem;
    row-gap:3rem;
    transition:.2s linear height,.2s linear max-height,.2s linear min-height;
    & > span{
        background-color:${({theme}) => theme.colors.primary};
        border-radius:2rem;
        height:.2rem;
        opacity:.75;
        width:85%;
    }
`