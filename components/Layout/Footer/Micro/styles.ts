import styled from 'styled-components';
export const Wrapper = styled.div`
    padding:1rem 1.5rem;
    & > address{
        align-items:flex-start;
        color:${({theme}) => theme.colors.color};
        display:flex;
        flex-flow:column;
        font-style:normal;
        row-gap:1rem;
        font-weight:700;
        word-break:break-word;
        word-wrap:break-word;
        & > a{
            transition:.2s linear color;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.tertiary};
            }
        }
    }
`