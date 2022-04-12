import styled, { css } from 'styled-components';
interface i {
    isPage ?: boolean,
}
export const TitleWrapper = styled.h1<i>`
    ${({isPage}) => isPage && css`
        font-size:3rem;
        line-height:4rem;
        padding:.85rem;
    `}
`