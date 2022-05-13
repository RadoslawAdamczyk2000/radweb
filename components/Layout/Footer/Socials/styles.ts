import styled from 'styled-components';
export const SocialWrapper = styled.li`
    height:3.5rem;
    width:3.5rem;
    &,
    & > a,
    & > a > span{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a,
    & > a > span{
        height:100%;
        width:100%;
    }
    & > a{
        position:relative;
        &::before{
            background:black;
            bottom:0;
            height:.4rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        & > span{
            font-size:2.5rem;
            transition:.2s linear transform;
        }
    }
    &:focus,
    &:hover {
        & > a{
            &::before{
                width:100%;
            }
            & > span{
                transform:translateY(-1rem) scale(1.35);
            }
        }
    }
`
export const SocialsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:1rem;
    justify-content:flex-end;
    padding:1rem 2.25rem;
    @media only screen {
        @media (max-width:950px){
            justify-content:center;
            max-width:95%;
            width:50rem;
        }
    }
`