import styled from 'styled-components';
export const BrandWrapper = styled.div`
    align-items:center;
    display:flex;
    height:5.5rem;
    justify-content:center;
    & > a{
        color:${({theme}) => theme.colors.background};
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:3rem;
        transition:.15s linear color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.secondary};
        }
    }
`