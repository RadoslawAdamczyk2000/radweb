import styled from 'styled-components';
export const SocialsWrapper = styled.ul`
    align-items:start;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    gap:.75rem;
    justify-content:flex-start;
    margin:auto;
    padding:.75em;
    & > li{
        color:black;
        height:3.75rem;
        width:3.75rem;
        & > a{
            height:100%;
            width:100%;
        }
        &,
        & > a{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > a{
            color:${({theme}) => theme.colors.primary};
            font-size:2.75rem;
            transition:.2s linear color, .2s linear transform;
        }
        &:hover > a{
            color:${({theme}) => theme.colors.color};
            transform:scale(1.15);
        }
    }
`