import styled from 'styled-components';
export const SectionButtonWrapper = styled.div`
    padding:0 .5rem;
    @media only screen {
        @media (max-width:245px){
            padding:0 .25rem;
        }
    }
    &,
    & > a {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a {
        background-color:${({theme}) => theme.colors.secondary};
        color: #fff;;
        border-radius:5rem;
        font-size:2.2rem;
        font-weight:600;
        padding:1rem 3rem;
        text-align:center;
        transition:.2s linear background-color, .2s linear transform;
        user-select:none;
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.tertiary};
            transform:scaleX(.95);

        }
        @media only screen {
            @media (max-width:360px){
                font-size:2rem;
                padding:.85rem 2rem;
            }
            @media (max-width:245px){
                font-size:1.8rem;
                padding:.85rem 1.25rem;
            }
        }
    }
`