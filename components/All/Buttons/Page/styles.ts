import styled from 'styled-components';
export const Primary = styled.div`
    &,
    & > a {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a {
        color:${({theme}) => theme.colors.primary};
        font-size:3rem;
        min-height:4rem;
        min-width:12rem;
        padding:.75rem 1.35rem;
        position:relative;
        transition:.12s linear color;
        & > span{
            background-color:${({theme}) => theme.colors.primary};
            position:absolute;
            transition:.12s linear background-color;
            &:nth-of-type(even){
                left:0;
                height:.2rem;
                width:100%;
            }
            &:nth-of-type(odd){
                top:0;
                height:100%;
                width:.2rem;
            }
            &:nth-of-type(1){
                left:0;
            }
            &:nth-of-type(2){
                top:0;
            }
            &:nth-of-type(3){
                right:0;
            }
            &:nth-of-type(4){
                bottom:0;
            }
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.secondary};
            & > span{
                background-color:${({theme}) => theme.colors.secondary};
            }
        }
    }
    @media only screen {
        @media (max-width:650px){
            & > a {
                font-size:2.2rem;
                min-height:2.5rem;
                padding:.55rem 1.15rem;
            }
        }
    }
`