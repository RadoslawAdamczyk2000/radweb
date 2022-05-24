import styled from 'styled-components';
export const FooterWrapper = styled.footer`
    background:${({theme}) => theme.colors.headings.subtitle};
    padding:1rem 0;
    & > div{
        &:first-of-type{
            display:flex;
            flex-flow:column;
            justify-content:center;
            padding:0 .5rem 2rem;
            row-gap:1rem;
            & > * {
                width:100%;
            }
        }
        &:nth-of-type(2){
            align-items:center;
            display:flex;
            justify-content:center;
        }
    }
`