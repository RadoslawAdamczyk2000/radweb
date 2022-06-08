import styled from 'styled-components';
export const CreditWrapper = styled.li`
    & > a {
        font-size:1.5rem;
        font-weight:700;
        transition:.2s linear text-shadow;
        &:focus,
        &:hover{
            text-shadow:0 0 .15rem ${({theme}) => theme.colors.background};
        }
    }
`