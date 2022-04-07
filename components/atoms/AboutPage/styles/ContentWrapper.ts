import styled from 'styled-components';
export const ContentWrapper = styled.article`
    margin:3rem auto;
    width:85%;
    & > h2,
    & > section > p {
        padding: 1rem 2rem;
    }
    & > h2{
        color:${({theme}) => theme.colors.color};
        font-size:3.2rem;
        line-height:6rem;
    }
    & > section{
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.85rem;
            line-height:3.5rem;
            margin:1.5rem 0;
        }
    }
`