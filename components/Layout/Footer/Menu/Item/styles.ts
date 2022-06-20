import styled from 'styled-components';
export const Wrapper = styled.li`
    position:relative;
    &,
    & > a{
        align-items:center;
        display:flex;
        justify-content:flex-start;
    }
    & > a {
        color:${({theme}) => theme.colors.gray};        
        font-size:1.7rem;
        font-weight:700;
        line-height:2;
        padding:0 1rem;
        position:relative;
        transition:.2s linear color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.color};        
        }
        @media only screen {
            @media (max-width:350px){
                font-size:1.45rem;
                line-height:1.5;
                padding:0 .5rem
            }
            @media (max-width:260px){
                font-size:1.4rem;
            }
        }
    }
`