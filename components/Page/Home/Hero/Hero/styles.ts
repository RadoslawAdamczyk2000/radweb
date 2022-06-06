import styled from 'styled-components';
export const HeroWrapper = styled.header`
    height:99vh;
    position:relative;
    width:100%;
    @media only screen{
        @media (max-width:900px){
            height:93vh;
        }
    }
    & > * {
        /* display:none; */
    }
`