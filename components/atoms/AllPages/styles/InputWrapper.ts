import styled, { css } from 'styled-components';
interface i {
    isInput ?: boolean,
    isText ?: boolean,
    isButton ?: boolean
}
export const InputWrapper = styled.div<i>`
    ${({isInput}) => isInput && css`
        width:100%;
        & > label{
            align-items:center;
            display:flex;
            font-size:2rem;
            justify-content:start;
            padding:1rem 2rem;
        }
        & > div {
            background-color:${({theme}) => theme.colors.secondary};
            border-radius:1rem 1rem 0 0;
            height:auto;
            position:relative;
            & > input{
                color:${({theme}) => theme.colors.primary};
                font-size:1.75rem;
                font-weight:700;
                padding:2rem 4rem;
                transition:.2s linear color;
                width:100%;
                &::placeholder{
                    color:${({theme}) => theme.colors.primary};
                }
                &:hover,
                &:focus{
                    color:${({theme}) => theme.colors.tertiary};
                }
                &:hover + span,
                &:focus + span {
                    background-color:${({theme}) => theme.colors.color};
                    height:.4rem;
                }
            }
            & > span{
                background-color:${({theme}) => theme.colors.primary};
                border-radius:10rem;
                bottom:0;
                left:0;
                height:.25rem;
                position:absolute;
                transition:.2s linear background-color,.12s linear height;
                width:100%;
            }
        }
    `}
    ${({isText}) => isText && css`
        width:100%;
        & > label{
            align-items:center;
            display:flex;
            font-size:2rem;
            justify-content:start;
            padding:1rem 2rem;
        }
        & > div{
            align-items:center;
            background-color:${({theme}) => theme.colors.secondary};
            border-radius:1rem;
            display:flex;
            height:18rem;
            justify-content:center;
            max-height:auto;
            position:relative;
            width:100%;
            & > textarea{
                color:${({theme}) => theme.colors.primary};
                font-size:1.75rem;
                font-weight:700;
                height:100%;
                line-height:3rem;
                padding:1.75rem;
                transition:.2s linear color;
                width:100%;
                &::placeholder{
                    color:${({theme}) => theme.colors.primary};
                }
                &:hover,
                &:focus{
                    color:${({theme}) => theme.colors.tertiary};
                }
            }
        }
    `}
    ${({isButton}) => isButton && css`
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:3rem;
        color:${({theme}) => theme.colors.color};
        font-size:2.45rem;
        padding:2rem 7rem;
        transition:.2s linear background-color, .2s linear color, .2s linear transform;
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.color};
            color:${({theme}) => theme.colors.background};
            transform:scaleY(.9);
        }
    `}
`