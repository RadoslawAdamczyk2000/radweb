import styled from 'styled-components';
export const InfoWrapper = styled.div`
    padding:1.75rem 1.5rem;
    &,
    & > div,
    & > div > address,
    & > div > ul{
        align-items:start;
        display:flex;
        flex-direction:column;
        font-style:normal;
        justify-content:start;
        row-gap:1.4rem;
    }
    /* flex-direction:row !important;
    column-gap:2rem; */
    p{
        font-size:2.1rem;
        font-weight:700;
        line-height:2.8rem;
    }
    a{
        color:${({theme}) => theme.colors.primary};
        font-size:1.9rem;
        line-height:2.1rem;
        transition:.2s linear color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.color};
        }
    }
    @media only screen and (max-width:650px){
        align-items:start;
        flex-direction:row;
        justify-content:space-around;
        width:100%;
    }
`