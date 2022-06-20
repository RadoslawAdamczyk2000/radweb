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
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.8rem;
            line-height:2.1;
            padding:.25rem;
        }
`