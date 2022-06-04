import styled, { css } from 'styled-components';
interface intNavigation {
    isScroll?:boolean;
    isHome?:boolean;
}
export const NavigationWrapper = styled.nav<intNavigation>`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    top:0;
    left:0;
    transition:.15s linear background-color;
    z-index:999;
    & > div{
        &:first-of-type{
            flex:1;
            order:1;
        }
        &:last-of-type{
            flex-basis:6rem;
            order:3;
        }
    }
    & > menu {
        flex:5;
        order:2;
    }

    ${({isHome}) => isHome && css`
        /* background:yellow; */
        height:5.5rem;
        position:fixed;
        width:100%;
        .brand{
            & > a{
                color:#fff;
            }
        }
        & > menu{
            color:#fff;
        }
        .themeButton{
            color:#fff;
        }
    `}
    ${({isHome,isScroll}) => (isHome && isScroll) && css`
        background-color:${({theme}) => theme.colors.background};
        .brand{
            & > a{
                color:${({theme}) => theme.colors.color};
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.secondary};
                }
            }
        }
        menu{
            color:${({theme}) => theme.colors.color};
        }
        .themeButton{
            color:${({theme}) => theme.colors.color};
        }
    ` }
    ${({isScroll}) => isScroll && css`
        box-shadow:${({theme}) => theme.colors.navShadow};
    `}


    ${({isHome}) => !isHome && css`
        align-items:center;
        background-color:${({theme}) => theme.colors.background};
        position:sticky;
    `}


`