import styled from 'styled-components';
export const PartnersWrapper = styled.div`
    background-color:${({theme}) => theme.colors.color};
    min-height:30rem;
    flex-flow:column;
    row-gap:2rem;
    &,
    & > ul{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > div{
        & > h2{
            color:${({theme}) => theme.colors.background};
            font-size:3.5rem;
            font-weight:500;
        }
    }
    & > ul {
        flex-flow:row wrap;
        gap:1.95rem;
        padding:0 3rem;
    }
`