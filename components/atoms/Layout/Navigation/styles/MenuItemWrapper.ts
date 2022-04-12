import styled, { css } from "styled-components";
interface i {
    scrolled ?: boolean,
    expand ?: boolean,
    main ?: boolean,
    submenu ?: boolean
}
export const MenuItemWrapper = styled.li<i>`
    a{
        color:${({theme}) => theme.colors.primary};
        font-size:${({scrolled}) => scrolled ? '1.85rem' : '2.1rem'};
        font-weight:600;
        height:100%;
        padding:0 1rem;
        position:relative;
        transition:.2s linear color, .2s ease-in-out font-size;
        width:100%;
        @media only screen and (max-width:980px){
            font-size:${({scrolled}) => scrolled ? '1.75rem' : '1.75rem'};
        }
        &:hover,
        &:focus{
            color:${({theme}) => theme.colors.color};
            @media only screen and (max-width:980px){
                color:${({theme}) => theme.colors.background};
            }
        }
        &::before{
                background-color:${({theme}) => theme.colors.color};
                bottom:-.35rem;
                height:.35rem;
                left:0;
                transition:.2s linear width;
                transform:skewX(-45deg);
                width:0;
                @media only screen and (max-width:980px){
                    background-color:${({theme}) => theme.colors.background};
                }
            }
        &:focus::before,
        &:hover::before{
            width:100%;
        }
    }
    ${({expand}) => expand && css`
        flex-direction:row;
        flex-wrap:nowrap;
        height:3rem;
        &,
        & > a,
        & > button {
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > button{
            color:${({theme}) => theme.colors.primary};
            flex-shrink:0;
            font-size:3rem;
            height:3rem;
            transition:.2s linear color;
            width:3rem;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.color};
                @media only screen and (max-width:980px){
                    color:${({theme}) => theme.colors.background};
                }
            }
            & > * {
                transition:.2s linear transform;
            }
            &:focus > *,
            &:hover > *{
                transform:scale(1.1);
            }
        }
    `}
    ${({main}) => main && css`
        
        height:3rem;
        &,
        & > a{
            align-items:center;
            display:flex;
            justify-content:center;
        }
    `}
    ${({submenu}) => submenu && css`
        & > a {
            color:#333;
            font-size:1.7rem;
            font-weight:500;
            &:hover,
            &:focus{
                color:#000;
            }
            &::before{
                bottom:-.15rem;
                background-color:#000;
                height:.3rem;
            }
        }
    `}
`