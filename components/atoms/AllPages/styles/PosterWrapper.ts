import styled, { css } from 'styled-components';
export const PosterWrapper = styled.figure`
    ${({isHero}) => isHero && css`
        height:55rem;
        position:relative;
        width:100%;
    `}
`