import styled, { css } from 'styled-components';
interface i {
 isHero : boolean   
}
export const ContentWrapper = styled.div<i>`
    ${({isHero}) => isHero && css`
        font-size:1.85rem;
        line-height:3rem;
        padding:.85rem;
        word-wrap:break-word;
    `}
`