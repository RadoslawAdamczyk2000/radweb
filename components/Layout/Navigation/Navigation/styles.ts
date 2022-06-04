import styled, { css } from 'styled-components';
interface intNavigation {
    isHome?:boolean;
}
export const NavigationWrapper = styled.nav<intNavigation>`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    top:0;
    left:0;
    z-index:999;
    & > div{
        &:first-of-type{
            background:red;
            flex:1;
            order:1;
        }
        &:last-of-type{
            background:blue;
            flex-basis:15rem;
            order:3;
        }
    }
    & > menu {
        background:orangered;
        flex:5;
        order:2;
    }

    ${({isHome}) => isHome && css`
        align-items:center;
        background:yellow;
        height:5.5rem;
        position:fixed;
        width:100%;
    `}

    ${({isHome}) => !isHome && css`
        align-items:center;
        background:lime;
    `}
`