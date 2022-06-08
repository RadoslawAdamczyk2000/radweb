import styled from 'styled-components';
export const CardWrapper = styled.div`
    aspect-ratio:10/5;
    width:100%;
    background:red;
    position:relative;
    width:85%;
    & > * {
        height:100%;
        width:100%;
    }
    & > figure{
        position:relative;
    }
    & > figcaption{
        align-items:flex-end;
        background-color:${({theme}) => theme.colors.offer.color};
        display:flex;
        flex-flow:column;
        justify-content:center;
        padding:.85rem 1rem;
        position:absolute;
        row-gap:.5rem;
        text-align:end;
        transition:.2s ease-in-out background-color;
        top:0;
        & > h3{
            color:${({theme}) => theme.colors.color};
            font-size:2.75rem;
        }
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.65rem;
            line-height:calc(1.65rem * 2);
            padding:.5rem;
        }
        & > div{
            & > a {
                align-items:center;
                background-color:${({theme}) => theme.colors.color};
                border-radius:5rem;
                color:${({theme}) => theme.colors.background};
                display:flex;
                font-size:1.8rem;
                justify-content:center;
                padding:.55rem 2.65rem;
                position:relative;
                transition:.2s linear background-color,.2s linear color,.2s linear transform;
                &:focus,
                &:hover{
                    background-color:${({theme}) => theme.colors.background};
                    color:${({theme}) => theme.colors.color};
                    transform:scaleX(.9);
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > figcaption{
            background-color:${({theme}) => theme.colors.offer.hover};
        }
    }
`