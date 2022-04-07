import styled from "styled-components";
export const ContentWrapper = styled.div`
    max-width:75%;
    display:flex;
    width:85rem;
    & > div{
        color:${({theme}) => theme.colors.primary};
        font-size:2.3rem;
        font-weight:100;
        line-height:4.5rem;
        text-align:start;
        margin:auto;
        max-width:75%;
        @media only screen and (max-width:800px){
            font-size:1.75rem;
        }
        h1,
        h2{
            color:${({theme}) => theme.colors.color};
            font-size:inherit;
        }
        & > * {
            display:inline;
        }
    }
    @media only screen and (max-width:550px){
        max-width:95%;
        width:35rem;
        & > div{
            max-width:95%;
        }
    }
`