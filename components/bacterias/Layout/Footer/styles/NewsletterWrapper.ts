import styled from 'styled-components';
export const NewsletterWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:95%;
    row-gap:1rem;
    width:55rem;
    & > div:first-of-type{
        & > * {
            padding:.5rem;
        }
        & > h5{
            color:${({theme}) => theme.colors.color};
            font-size:2.5rem;
        }
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.65rem;
            line-height:3rem;
        }
    }
    & > form{
        width:100%;
    }
`