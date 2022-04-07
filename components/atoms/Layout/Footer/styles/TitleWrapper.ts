import styled from 'styled-components';
export const TitleWrapper = styled.div`
    & > *{
        padding:.75rem;
    }
    & > h3,
    & > h4{
        font-size:2.3rem;
    }
    & > h3{
        color:${({theme}) => theme.colors.tertiary};
    }
    & > h4{
        color:${({theme}) => theme.colors.color};
    }
    & > p{
        color:${({theme}) => theme.colors.primary};
        font-size:1.65rem;
        line-height:2.7rem;
    }
`