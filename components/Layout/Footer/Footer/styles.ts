import styled from 'styled-components';
export const FooterWrapper = styled.footer`
    background-color:${({theme}) => theme.colors.color};
    color:${({theme}) => theme.colors.background};
    padding:2rem 0 3rem;
    & > span{
        display:block;
        box-shadow:0 0 .1rem ${({theme}) => theme.colors.background};
        height:.1px;
        width:99%;
        margin: 0 auto;
    }
`