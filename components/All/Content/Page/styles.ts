import styled,{css} from 'styled-components';
interface contentHome {
    center?:boolean;
    primary?:boolean;
    secondary?:boolean;
    tertiary?:boolean;
}
export const ContentHomeWrapper = styled.p<contentHome>`
    line-height:2;
    ${({center}) => center && css`
        text-align:center;
    `}
    ${({primary,secondary}) => (primary || secondary) && css`
        color:${({theme}) => theme.colors.color};
        font-size:1.9rem;
        padding:.35rem;
    `}
    ${({primary}) => primary && css`
        opacity:.75;
    `}
    ${({tertiary}) => tertiary && css`
        color:${({theme}) => theme.colors.background};
        font-size:2.2rem;
        font-weight:700;
        @media only screen and (max-width:550px){
            font-weight:600;
        }
    `}

    @media only screen and (max-width:570px){
        font-size:1.68rem;
    }

`