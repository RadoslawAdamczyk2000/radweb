import styled from "styled-components";
interface i {
    scrolled ?: boolean
}
export const NavigationWrapper = styled.nav<i>`
    background-color:${({theme}) => theme.colors.background};
    box-shadow:${({scrolled,theme}) => scrolled && theme.shadows.navigation};
    color:${({theme}) => theme.colors.color};
    display:grid;
    grid-template-areas:"brand menuBox menuBox menuBox options";
    height:${({scrolled}) => scrolled ? '6rem' : '8rem'};
    position:sticky;
    transition:.12s ease-in-out height;
    top:0;
    z-index:9999999999999999999;
    & > * {
        margin:auto;
    }
    & > div:first-of-type{
        grid-area:brand;
    }
    & > menu {
        grid-area:menuBox;
    }
    & > div:last-of-type{
        grid-area:options;
    }
    @media only screen and (max-width:980px){
        background-color:${({theme}) => theme.colors.color};
        color:${({theme}) => theme.colors.background};
        grid-template-rows:4.5rem auto;
        grid-template-areas:
        "brand options"
        "menuBox menuBox";
        height:${({scrolled}) => scrolled ? 'auto' : 'auto' };
    }
`