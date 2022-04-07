import styled from 'styled-components';
export const HobbiesWrapper = styled.ul`
    flex-direction:row;
    flex-wrap:wrap;
    gap:2rem;
    padding:2rem 4rem;
    margin:5rem 0;
    width:100%;
    &,
    & > li,
    & > li > i{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > li{
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:1rem 0 1rem 0;
        flex-direction:column;
        height:12rem;
        justify-content:space-around;
        margin:auto;
        width:12rem;
        & > i{
            color:${({theme}) => theme.colors.tertiary};
            font-size:3rem;
            height:4rem;
            width:4rem;
        }
        & > p{
            color:${({theme}) => theme.colors.color};
            font-weight:700;

        }
    }
`