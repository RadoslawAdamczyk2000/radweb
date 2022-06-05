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
            flex-basis:18rem;
            order:1;
        }
        &:last-of-type{
            flex-basis:7rem;
            order:3;
        }
    }
    & > menu {
        flex-basis:calc(100% - 18rem - 7rem);
        order:2;
    }

    @media only screen {
        @media (max-width:970px){
            height:4rem;
            & > div{
                &:first-of-type{
                    flex-basis:12rem;
                    & > a{
                        font-size:2.4rem;
                    }
                }
                &:last-of-type{
                    flex-basis:6.5rem;
                }
            }
            & > menu {
                flex-basis:calc(100% - 12rem - 6.5rem);
            }
        }
        @media (max-width:900px){
            background-color:${({theme}) => theme.colors.background};
            height:auto;
            flex-flow:row wrap;
            justify-content:space-between;
            position:sticky;
            .brand{
                & > a{
                    color:${({theme}) => theme.colors.color};
                    &:focus,
                    &:hover{
                        color:${({theme}) => theme.colors.primary};
                    }
                }
            }
            .themeButton{
                color:${({theme}) => theme.colors.color};
            }
            & > div{
                &:first-of-type{
                    justify-content:flex-start;
                    padding:0 0 0 2rem;
                    order:1;
                }
                &:last-of-type{
                    order:2;
                }
            }
            & > menu {
                flex-basis:100%;
                order:3;
                justify-content:center;
            }
        }
        @media (max-width:650px){
            & > .brand{
                height:3.85rem;
            }
            & > menu {
            }
        }
    }


    ${({isHome}) => isHome && css`
        height:5.5rem;
        position:fixed;
        width:100%;
        .brand{
            & > a{
                color:#fff;
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.primary};
                }
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
                    color:${({theme}) => theme.colors.primary};
                }
            }
        }
        menu{
            color:${({theme}) => theme.colors.color};
        }
        .themeButton{
            color:${({theme}) => theme.colors.color};
        }
        @media only screen {
            @media (max-width:900px){
                color:${({theme}) => theme.colors.background};
                & > *{
                    color:${({theme}) => theme.colors.background};

                }
                .brand{
                    & > a{
                        color:${({theme}) => theme.colors.color};
                        &:focus,
                        &:hover{
                            color:${({theme}) => theme.colors.primary};
                        }
                    }
                }
                .themeButton{
                    color:${({theme}) => theme.colors.color};
                }
            }
        }
    ` }
    ${({isScroll}) => isScroll && css`
        box-shadow:${({theme}) => theme.colors.navShadow};
        menu {
            .expand,
            .main{
                a{
                    &:focus,
                    &:hover{
                        color:#fff;
                    }
                }
            }
        }
        @media only screen {
            @media (max-width:900px){
                color:${({theme}) => theme.colors.background};
                & > *{
                    color:${({theme}) => theme.colors.background};
                }
                .brand{
                    & > a{
                        color:${({theme}) => theme.colors.color};
                        &:focus,
                        &:hover{
                            color:${({theme}) => theme.colors.primary};
                        }
                    }
                }
                .themeButton{
                    color:${({theme}) => theme.colors.color};
                }
            }
        }
    `}
    ${({isScroll}) => !isScroll && css`
        @media only screen {
            @media (max-width:900px){
                color:${({theme}) => theme.colors.background};
                & > *{
                    color:${({theme}) => theme.colors.background};
                }
                .brand{
                    & > a{
                        color:${({theme}) => theme.colors.color};
                        &:focus,
                        &:hover{
                            color:${({theme}) => theme.colors.primary};
                        }
                    }
                }
                .themeButton{
                    color:${({theme}) => theme.colors.color};
                }
            }
        }
    `}


    ${({isHome}) => !isHome && css`
        align-items:center;
        background-color:${({theme}) => theme.colors.background};
        position:sticky;
       
    `}


`