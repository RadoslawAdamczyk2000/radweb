import styled from 'styled-components';
export const NavigationWrapper = styled.nav`
    background-color:${({theme}) => theme.colors.background};
    display:grid;
    grid-template-columns:15rem calc(100% - 15em) 5rem;
    height:5rem;
    left:0;
    position:sticky;
    top:0;
    width:100%;
`