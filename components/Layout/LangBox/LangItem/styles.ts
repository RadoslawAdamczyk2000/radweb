import styled from 'styled-components';
export const LangItemWrapper = styled.li`
    & > a {
        align-items:center;
        background-color:${({theme}) => theme.colors.secondary};
        border:.35rem solid ${({theme}) => theme.colors.background};
        border-radius:5rem;
        color:${({theme}) => theme.colors.background};
        display:flex;
        font-size:2.85rem;
        font-weight:700;
        justify-content:center;
        padding:.85rem 3.5rem;
        transition:.2s linear box-shadow,.2s linear filter,.2s linear transform;
        &:focus,
        &:hover{
            box-shadow:0 0 1.5rem hsla(0,100%,0%,.25), inset 0 0 .5rem hsla(0,100%,0%,.8);
            filter:brightness(105%);
            transform:scaleX(.95);
        }
        @media only screen {
            @media (max-width:400px){
                border:.35rem solid ${({theme}) => theme.colors.background};
                font-size:2.25rem;
                font-weight:700;
                padding:.65rem 2.5rem;
            }
        }
    }
`