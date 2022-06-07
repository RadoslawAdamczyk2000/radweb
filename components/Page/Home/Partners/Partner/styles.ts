import styled from 'styled-components';
export const PartnerWrapper = styled.li`
    margin:auto;
    & > a{
        font-size:2rem;
        color:${({theme}) => theme.colors.background};
        opacity:.65;
        transition:.2s .15s linear color,.15s linear opacity;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.tertiary};
            opacity:1;
        }
    }
`