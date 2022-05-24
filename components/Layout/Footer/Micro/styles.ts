import styled from 'styled-components';
export const ContactWrapper = styled.address`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:1rem;
    justify-content:center;
    padding:1rem 2.25rem;
`
export const ContactItemWrapper = styled.li`
    color:${({theme}) => theme.colors.background};
    height:4.5rem;
    opacity:.65;
    transition:.2s linear color, .2s linear opacity, .2s linear transform;
    width:4.5rem;
    &,
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a {
        font-size:3rem;
        height:100%;
        width:100%;
    }
    &:focus,
    &:hover{
        color:${({theme}) => theme.colors.quatenary};
        opacity:1;
        transform:scale(.95);
    }
`
export const MicroWrapper = styled.div`
    & > article{
        color:${({theme}) => theme.colors.background};
        padding:.25rem;
        text-align:center;
        & > h4{
            font-size:2.2rem;
        }
        & > p{
            font-size:1.75rem;
            line-height:calc(1.75rem * 2);
        }
    }
    @media only screen {
        @media (max-width:950px){
            max-width:95%;
            width:50rem;
            & > article{
                text-align:center;
            }
        }
    }
`