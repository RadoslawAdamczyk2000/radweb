import styled, { css } from "styled-components";
export const ButtonWrapper = styled.a`
    cursor:pointer;
    user-select:none;
    ${({page}) => page && css`
            align-items:center;
            display:flex;
            flex-shrink:0;
            font-size:2rem;
            font-weight:700;
            justify-content:center;
            padding:2rem 4rem;
            position:relative;
            transition:.2s linear color,.2s linear transform;
            z-index:0;
        &::before{
            border:.2rem solid ${({theme}) => theme.colors.primary};
            height:100%;
            transition:.2s linear background-color,.2s linear box-shadow,.2s linear transform;
            width:100%;
            z-index:-1;
        }
        &,
        &::before{
            border-radius:3.5rem;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.background};
            transform:scaleX(.93);
            &::before{
                background-color:${({theme}) => theme.colors.color};
                box-shadow:${({theme}) => theme.shadows.button};
                transform:scaleX(.93);
            }
        }
        @media only screen and (max-width:800px){
            font-size:1.55rem;
            padding:1.5rem 3rem;
        }
    `}
    ${({section}) => section && css`
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:1.5rem;
        justify-content:center;
        padding:.25rem .5rem;
        position:relative;
        &::before{
            background-color:${({theme}) => theme.colors.color};
            border-radius:1rem;
            bottom:0;
            height:.45rem;
            left:0;
            transition:.2s linear width;
            width:0;
        }
        & > p {
            color:${({theme}) => theme.colors.primary};
            font-size:2.3rem;
            font-weight:700;
            transition:.2s linear color;
        }
        & > button{
            flex-shrink:0;
            font-size:3rem;
            height:5rem;
            position:relative;
            width:5rem;
            z-index:1;
            &,
            & > i{
                align-items:center;
                border-radius:50%;
                display:flex;
                justify-content:center;
            }
            & > i {
                color:${({theme}) => theme.colors.primary};
                height:100%;
                position:absolute;
                transition:.2s linear color,.2s linear transform;
                width:100%;
            }
        }
        &:focus,
        &:hover{
            @media only screen and (min-width:1000px){
                &::before{
                    width:100%;
                }
            }
            & > p{
                color:${({theme}) => theme.colors.color};
            }
            & > button > i{
                color:${({theme}) => theme.colors.color};
                transform:translateX(1.5rem) scale(.9)
            }
        }
    `}
`