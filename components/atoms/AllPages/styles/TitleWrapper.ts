import styled, { css } from 'styled-components';
export const TitleWrapper = styled.h1`
    ${({isPage}) => isPage && css`
        font-size:3rem;
        line-height:4rem;
        padding:.85rem;
    `}
`