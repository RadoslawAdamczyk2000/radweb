import styled, { css } from 'styled-components';
interface title {
    primary?:boolean;
    secondary?:boolean;
}

export const TitleWrapper = styled.h2<title>`
    font-size:5rem;
    font-weight:500;
    padding:.25rem .45rem;
    ${({primary}) => primary && css`
        color:${({theme}) => theme.colors.primary};
    `}
    ${({secondary}) => secondary && css`
        color:${({theme}) => theme.colors.background};
        font-weight:700;
    `}
    @media only screen {
        @media (max-width:570px){
            font-size:3rem;
        }
    }

`