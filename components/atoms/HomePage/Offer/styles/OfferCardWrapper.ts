import styled from "styled-components";
export const OfferCardWrapper = styled.article`
    align-items:start;
    display:flex;
    flex-direction:column;
    margin:3rem 0;
    row-gap:2rem;
    width:40rem;
    & > figure{
        height:25rem;
        position:relative;
        width:25rem;
    }
    & > h3{
        color:${({theme}) => theme.colors.tertiary};
        font-size:2.5rem;
        line-height:3.8rem;
        padding:.35rem;
        text-align:start;
    }
    & > div{
        font-size:1.85rem;
        line-height:2.9rem;
    }
    @media only screen and (max-width:1010px){
        row-gap:1.2rem;
        max-width:95%;
        width:35rem;
        & > figure{
            width:100%;
        }
        & > h3{
            font-size:2.2rem;
            line-height:3.5rem;
        }
        & > div{
            font-size:1.65rem;
            line-height:2.7rem;
        }
    }
`