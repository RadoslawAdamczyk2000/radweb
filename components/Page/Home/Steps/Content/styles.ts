import styled from 'styled-components';
export const ContentWrapper = styled.section`
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        margin:1rem auto;
        row-gap:2rem;
        padding:1rem 0;
        text-align:center;
        width:85%;
        & > h2{
            color:${({theme}) => theme.colors.primary};
            font-size:5.85rem;
            font-weight:500;
            width:100%;
        }
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.8rem;
            line-height:2.1;
            padding:.25rem;
        }
`