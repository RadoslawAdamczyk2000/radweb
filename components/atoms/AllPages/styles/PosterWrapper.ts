import styled, { css } from 'styled-components';
interface i {
    isHero ?: boolean
}
export const PosterWrapper = styled.figure<i>`
    ${({isHero}) => isHero && css`
        height:55rem;
        position:relative;
        width:100%;
    `}
`