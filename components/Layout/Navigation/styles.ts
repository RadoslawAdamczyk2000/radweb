import styled, { css } from 'styled-components';
interface iMenuButton{
    active:boolean;
}
export const BrandWrapper = styled.div`
    color:${({theme}) => theme.colors.quatenary};
    font-size:2.25rem;
    font-weight:900;
    padding:.25rem .75rem;
    @media only screen {
        @media (max-width:850px){
            grid-area:brand;
            width:100%;
        }
    }
`
export const Button = styled.div`
    align-items:center;
    cursor:pointer;
    display:flex;
    flex-shrink:0;
    height:2.75rem;
    justify-content:center;
    transition:.2s linear transform;
    width:2.75rem;
    &:focus,
    &:hover{
        transform:scale(.95);
    }
`
export const MenuItem = styled.li`
    & > a{
        align-items:center;
        display:flex;
        height:100%;
        justify-content:center;
        padding:0 1rem;
        position:relative;
        width:100%;
    }
    @media only screen {
        @media (min-width:1500px){
            
        }
    }
`
export const MenuButtonWrapper = styled(Button)<iMenuButton>`
    display:none;
    @media only screen{
        @media (max-width:900px){
            display:flex;
            flex-flow:column;
            padding:.25rem;
            position:relative;
            row-gap:1rem;
            & > span{
                background:${({theme}) => theme.colors.background};
                border-radius:2rem;
                height:.3rem;
                transition:.2s linear background-color,.2s linear transform;
                width:100%;
            }
            &focus,
            &:hover{
                & > span{
                    background-color:${({theme}) => theme.colors.tertiary};
                }
            }
            ${({active}) => active && css`
                row-gap:0;
                & > span{
                    left:50%;
                    top:50%;
                    position:absolute;
                    &:first-of-type{
                        transform:translate(-50%,-50%) rotate(45deg);
                    }
                    &:last-of-type{
                        transform:translate(-50%,-50%) rotate(-45deg);
                    }
                }
            `}
        }
    }
`
export const MenuItemExpandWrapper = styled.div`
    height:3rem;
    flex-flow:row nowrap;
    justify-content:space-between;
    &,
    & > *{
        align-items:center;
        display:flex;
    }
    & > * {
        height:100%;
        justify-content:center;
    }
    & > a{
        color:${({theme}) => theme.colors.background};
        font-size:1.65rem;
        font-weight:700;
        padding:0 1rem;
        position:relative;
        transition:.2s linear color;
        &::before{
            background-color:${({theme}) => theme.colors.quatenary};
            border-radius:2rem;
            bottom:0;
            height:.25rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        & > p {
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.quatenary};
            &::before{
                width:100%;
            }
            & > p {
                transform:translateY(-.25rem);
            }
        }
    }
    & > div{
        border-radius:.75rem;
        cursor:pointer;
        font-size:3rem;
        transition:.2s linear background-color, .2s linear color;
        width:3rem;
        & > * {
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.background};
            color:${({theme}) => theme.colors.color};
            & > * {
                transform:translateY(.25rem) scale(1.15);
            }
        }
    }
    @media only screen {
        @media (min-width:1500px){
            height:4.75rem;
            & > a{
                font-size:1.85rem;
                &::before{
                    height:.4rem;
                }
            }
            & > div{
                font-size:4rem;
                width:3.75rem;
            }
        }
        @media (max-width:690px){
            justify-content:flex-start;
            width:100%;
            & > a{
                width:15rem;
                justify-content:flex-start;
                text-align:start;

            }
        }
    }
`
export const MenuItemMainWrapper = styled(MenuItem)`
    height:3rem;
    & > a{
        color:${({theme}) => theme.colors.background};
        font-size:1.65rem;
        font-weight:700;
        transition:.2s linear color;
        &::before{
            background:${({theme}) => theme.colors.quatenary};
            border-radius:2rem;
            bottom:0;
            height:.25rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        & > p {
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.quatenary};
            &::before{
                width:100%;
            }
            & > p {
                transform:translateY(-.25rem);
            }
        }
    }
    @media only screen {
        @media (min-width:1500px){
            height:4.75rem;
            & > a{
                font-size:1.85rem;
                &::before{
                    height:.4rem;
                }
            }
        }
    }
`
export const MenuItemSubmenuWrapper = styled(MenuItem)`
    min-width:15rem;
    & > a{
        background-color:${({theme}) => theme.colors.color};
        border-radius:.65rem;
        font-size:1.55rem;
        justify-content:start;
        font-weight:500;
        text-align:start;
        transition:.2s linear background-color, .2s linear color;
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.background};
            color:${({theme}) => theme.colors.color};
        }
    }
    @media only screen {
        @media (min-width:1300px){
            min-width:20rem;
            & > a{
                border-radius:.85rem;
                font-size:1.75rem;
                padding:.35rem 0 .35rem .85rem;
            }
        }
        @media (max-width:690px){
            min-width:auto;
            width:100%;
            & > a{
                border-radius:0;
                font-size:1.45rem;
                margin:.2rem 0;
                &:focus,
                &:hover{
                    background-color:#eee;
                }
            }
        }
    }
`
export const MenuWrapper = styled.menu`
    align-items:start;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    @media only screen {
        @media (max-width:900px){
            padding:.75rem .25rem;
        }
        @media (max-width:690px){
            flex-flow:column;
            padding:.75rem 2.25rem;
        }
    }
`
export const NavigationWrapper = styled.nav`
    position:sticky;
    top:0;
    transition:.2s linear background-color,.2s linear height;
    z-index:999999999999;
    &.desktop{
        display:none;
        @media only screen {
            @media (min-width:900px){
                align-items:center;
                display:flex;
                background-color:${({theme}) => theme.colors.headings.subtitle};
                color:${({theme}) => theme.colors.background};
                height:5.75rem;
                padding:0 2rem;
                user-select:none;
                &,
                & > div{
                    align-items:center;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                }
            }
            @media (min-width:1500px){
                height:7.75rem;
            }
        }
    }
    &.mobile{
        display:none;
        @media only screen and (max-width:899px){
            background-color:${({theme}) => theme.colors.headings.subtitle};
            color:${({theme}) => theme.colors.background};
            display:flex;
            flex-flow:column;
            height:auto;
            max-height:100vh;
            & > div{
                align-items:center;
                display:flex;
                flex-flow:row nowrap;
                justify-content:space-between;
                padding:0 2rem;
            }
        }
    }
`
export const OptionsWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
`
export const SubmenuWrapper = styled.li`
    position:relative;
    @media only screen {
        @media (min-width:690px){
            & > ul{
                align-items:start;
                background-color:${({theme}) => theme.colors.color};
                border-radius:.65rem;
                box-shadow:0 1rem 2rem .25rem hsla(0,100%,0%,.25);
                display:flex;
                flex-flow:column nowrap;
                justify-content:flex-start;
                position:absolute;
                padding:.85rem .45rem;
                row-gap:.25rem;
            }
        }
        @media (max-width:690px){
            & > ul{
                margin-left:5rem;
            }
        }
    }

`
export const ThemeButtonWrapper = styled(Button)`
    display:none;
    font-size:2rem;
`