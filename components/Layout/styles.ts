import styled,{css} from 'styled-components';
interface menuButton {
    active:boolean
}
interface nav {
    scroll:boolean
}
interface themeButton {
    light:boolean
}
export const AuthorWrapper = styled.div`
    & > p{
        color:${({theme}) => theme.colors.primary};
        font-size:1.5rem;
        font-weight:800;
        text-align:center;
        user-select:none;
    }
`
export const BrandWrapper = styled.div`
    & > a{
        color:${({theme}) => theme.colors.color};
        font-size:1.9rem;
        font-weight:700;
        transition:.12s linear text-shadow;
        user-select:none;
        &:focus,
        &:hover{
            text-shadow:0 0 2rem ${({theme}) => theme.colors.color};
        }
    }
`
export const FooterWrapper = styled.footer`
    align-items:center;
    border-top:.15rem solid ${({theme}) => theme.colors.secondary};
    display:flex;
    flex-direction:column;
    row-gap:1.5rem;
    padding:1.5rem 0;
`
export const InfoWrapper = styled.section`
    flex-direction:row;
    justify-content:space-between;
    margin:auto;
    max-width:95%;
    width:120rem;
    &,
    & > div:first-of-type{
        align-items:center;
        display:flex;
        flex-wrap:wrap-reverse;
        min-height:32rem;
        
    }
    & > div:first-of-type{
        flex-direction:column;
        justify-content:space-evenly;
        max-width:85%;
        width:52rem;
        margin:auto;
        & > article{
            & > p{
                font-size:1.95rem;
                font-weight:800;
                line-height:3rem;
                margin:1rem 0;
                padding:.5rem;
                &:last-of-type{
                    font-weight:300;
                    font-size:1.8rem;
                }
            }
        }
    }

`
export const MapWrapper = styled.div`
    border-radius:1.5rem;
    height:42rem;
    margin:auto;
    max-width:85%;
    overflow:hidden;
    position:relative;
    width:40rem;
    & > iframe{
        all:unset;
        display:block;
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`
export const MenuButtonWrapper = styled.div<menuButton>`
    display:none;
    @media only screen and (max-width:750px){
        align-items:center;
        cursor:pointer;
        display:flex;
        flex-direction:column;
        height:3.5rem;
        justify-content:space-around;
        padding:.25rem;
        position:relative;
        width:3.5rem;
        & > span{
            background-color:${({theme}) => theme.colors.color};
            height:.3rem;
            transition:.2s .2s linear display, .2s linear opacity, .2s linear transform, .2s linear visibility;
            width:100%;
        }
        &:focus,
        &:hover{
            & > span{
                transform:scale(.8);
            }
        }
        ${({active}) => active && css`
            & > span{
                left:50%;
                position:absolute;
                top:50%;
                width:85%;
                &:first-of-type{
                    transform:translate(-50%,-50%) rotate(45deg);
                }
                &:last-of-type{
                    transform:translate(-50%,-50%) rotate(-45deg);
                }
                &:nth-of-type(2){
                    display:none;
                    opacity:0;
                    visibility:hidden;
                }
            }
        `}
    }
`
export const MenuFooterWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap-reverse;
    justify-content:space-around;
    padding:.5rem 0;
    max-width:85%;
    width:90rem;
    & > div{
        margin:0 auto;
        width:25rem;
        & > h4{
            color:${({theme}) => theme.colors.color};
            font-size:3rem;
            padding:1.5rem .25rem;
        }
        & > address,
        & > menu{
            align-items:start;
            display:flex;
            flex-direction:column;
            font-style:normal;
            justify-content:center;
            padding:1rem .75rem;
            row-gap:2rem;
            & > a,
            & > li > a{
                color:${({theme}) => theme.colors.primary};
                font-size:1.75rem;
                font-weight:600;
                transition:.2s linear color;
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.color};
                }
            }
        }
    }
`
export const MenuItemWrapper = styled.li`
    @media only screen {
        @media (max-width:750px){
            color:${({theme}) => theme.colors.primary};
            font-size:1.65rem;
            margin:.15rem auto;
            max-width:95%;
            transition:.12s linear color;
            width:25rem;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.color};
            }
        }
        @media (min-width:750px){
            column-gap:.75rem;
            flex-flow:row nowrap;
            font-size:1.65rem;
            font-weight:400;
            height:3.5rem;
            min-width:10rem;
            padding:0 1rem;
            a{
                color:${({theme}) => theme.colors.primary};
                transition:.12s linear color;
            }
            &:focus,
            &:hover{
                a{
                    color:${({theme}) => theme.colors.color};
                }
            }
            &,
            & > div{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > div{
                cursor:pointer;
                font-size:4rem;
                height:3rem;
                transition:.2s linear color;
                width:3rem;
                & > *{
                    transition:.2s linear transform;
                }
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.color};
                    & > *{
                        transform:scale(.95);
                    }
                }
            }
        }
    }
`
export const Nav = styled.nav`
    position:sticky;
    top:0;
    z-index:9999999999999999;
`
export const NavDesktopWrapper = styled(Nav)<nav>`
    display:none;
    @media only screen and (min-width:750px){
        background-color:${({theme}) => theme.colors.background};
        height:5.5rem;
        justify-content:space-between;
        padding:0 2rem;
        transition:.12s linear box-shadow;
        ${({scroll}) => scroll && css`
            box-shadow:${({theme}) => theme.shadows.navigation};
        `}
        &,
        & > div,
        & > div > menu{
            align-items:center;
            display:flex;
            flex-direction:row;
        }
        & > div{
            gap:1rem;
            & > menu{
                gap:.75rem;
            }
        }
    }
`
export const NavMobileWrapper = styled(Nav)`
    @media only screen and (max-width:750px){
        background-color:${({theme}) => theme.colors.secondary};
        transition:.12s linear height;
        & > div{
            &.top{
                align-items:center;
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                height:4rem;
                padding:0 2rem;
            }
            &.bottom{
                align-items:center;
                padding:1rem 0;            
                transition:.12s linear height;
                &,
                & > menu{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }
                & > menu{
                    align-items:start;
                }
            }
        }
    }
    @media only screen and (min-width:750px){
        display:none;
    }
`
export const NewsletterWrapper = styled.div`
    align-items:baseline;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    gap:1rem;
    max-width:95%;
    padding:2rem 0;
    width:85rem;
    & > form {
        align-items:start;
        flex-direction:column;
        gap:2.5rem;
        &,
        & > div{
            width:100%;
        }
        &,
        & > div,
        & > button{
            align-items:center;
            display:flex;
        }
        & > div{
            flex-flow:row wrap;
            gap:1.5rem;
            justify-content:flex-start;
            padding:.75rem;
            & > div.field{
                max-width:99%;
                width:35rem;
                & > label{
                    align-items:center;
                    display:flex;
                    font-size:2rem;
                    font-weight:700;
                    justify-content:start;
                    padding:.5rem 1rem;
                    width:100%;
                }
                & > div{
                    height:5.5rem;
                    position:relative;
                    & > input{
                        background-color:${({theme}) => theme.colors.secondary};
                        color:${({theme}) => theme.colors.color};
                        font-size:1.75rem;
                        height:100%;
                        padding:0 1rem;
                        transition:.12s linear color;
                        width:100%;
                        &::placeholder{
                            color:${({theme}) => theme.colors.primary};
                            font-size:1.8rem;
                            padding:0 0;
                            text-indent:2rem;
                        }
                        &:focus + span,
                        &:hover + span{
                            background-color:${({theme}) => theme.colors.color};
                            height:.35rem;
                        }
                        &:invalid{
                            color:red;
                        }
                        &:valid{
                            color:green;
                        }
                    }
                    & > span{
                        background-color:${({theme}) => theme.colors.primary};
                        bottom:0;
                        left:0;
                        height:.25rem;
                        position:absolute;
                        transition:.2s linear background-color, .2s linear height;
                        width:100%;
                    }
                }
            }
        }
        & > button{
            border-radius:1rem;
            color:${({theme}) => theme.colors.color};
            font-size:2rem;
            font-weight:900;
            height:4rem;
            justify-content:center;
            transition:.2s linear background-color,.2s linear color, .2s .2s linear transform;
            width:14rem;
            &:focus,
            &:hover{
                background-color:${({theme}) => theme.colors.color};
                color:${({theme}) => theme.colors.background};
                transform:scaleX(.9);
            }
        }
    }
    & > section{
        padding:1rem;
        & > h4{
            font-size:2.6rem;
            line-height:5rem;
        }
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.7rem;
            line-height:3rem;
        }
    }
   
`
export const OptionsWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    gap:1rem;
    justify-content:center;
`
export const ThemeButtonWrapper = styled.div<themeButton>`
    align-items:center;
    color:${({theme}) => theme.colors.color};
    cursor:pointer;
    display:flex;
    font-size:2rem;
    height:3.75rem;
    justify-content:center;
    width:3.75rem;
    & > *{
        transition:.2s linear transform;
    }
    &:focus > *,
    &:hover > *{
        transform:scale(.95);       
    }
`
export const SocialsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:1rem;
    justify-content:flex-start;
    padding:1rem 2rem;
    width:100%;
    & > .social{
        height:3.5rem;
        width:3.5rem;
        &,
        & > a{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > a{
            color:${({theme}) => theme.colors.primary};
            font-size:2.5rem;
            height:100%;
            transition:.15s linear color,.15s linear transform;
            position:relative;
            width:100%;
            &::before{
                background-color:${({theme}) => theme.colors.color};
                bottom:0;
                height:.35rem;
                left:0;
                transition:.2s linear width;
                width:0;
            }
        }
        &:focus,
        &:hover{
            & > a{
                color:${({theme}) => theme.colors.color};
                transform:scale(1.25);
                &::before{
                    width:100%;
                }
            }
        }
    }
`
export const SubmenuWrapper = styled.li`
    @media only screen {
        @media (max-width:750px){
            color:${({theme}) => theme.colors.primary};
            .expand{
                column-gap:1rem;
                flex-flow:row nowrap;
                &,
                & > div{
                    align-items:center;
                    display:flex;
                    justify-content:start;
                }
                & > div{
                    cursor:pointer;
                    font-size:2rem;
                }
            }
            .submenu{
                padding-left:1rem;
            }
        }
        @media (min-width:750px){
            position:relative;
            & > ul{
                border-radius:0 0 1.5rem 1.5rem;
                box-shadow:0 0 .25rem ${({theme}) => theme.colors.primary};
                padding:1rem 1.5rem;
                background-color:${({theme}) => theme.colors.secondary};
                position:absolute;
                margin-top:.15rem;
            }
        }
    }
`