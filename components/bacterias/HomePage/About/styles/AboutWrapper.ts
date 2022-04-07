import styled from 'styled-components';
export const AboutWrapper = styled.section`
    display:grid;
    grid-template-columns:2fr 3fr;
    min-height:45rem;
    & > .content,
    & > .video{
        align-items:baseline;
        display:flex;
        justify-content:center;
        max-width:99%;
    }
    @media only screen and (max-width:1270px){
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:2.5rem;
    }
`