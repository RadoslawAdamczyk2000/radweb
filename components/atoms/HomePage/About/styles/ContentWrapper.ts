import styled from 'styled-components';
export const ContentWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:75%;
    padding:.75rem 1rem;
    row-gap:2rem;
    width:60rem;
    & > .title{
        font-size:4rem;
        font-weight:700;
    }
    & > .content{
        font-size:2.1rem;
        line-height:3.1rem;
        text-align:start;
        @media only screen and (max-width:550px){
            font-size:1.75rem;
        }
    }
`