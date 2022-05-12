import styled from 'styled-components';
export const FooterWrapper = styled.footer`
    background:#ddd;
    & > div{
        align-items:center;
        background-color:pink;
        display:flex;
        flex-flow:row wrap;
        justify-content:space-around;
    }
`