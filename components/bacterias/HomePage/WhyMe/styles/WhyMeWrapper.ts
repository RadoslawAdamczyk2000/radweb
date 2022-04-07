import styled from 'styled-components';
export const WhyMeWrapper = styled.section`
    background-color:${({theme}) => theme.colors.secondary};
    border-radius:3rem;
    color:${({theme}) => theme.colors.color};
    display:grid;
    grid-template-columns:2fr 3fr;
    padding:6rem 3rem;
    @media only screen and (max-width:1300px){
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:3rem;
    }
`