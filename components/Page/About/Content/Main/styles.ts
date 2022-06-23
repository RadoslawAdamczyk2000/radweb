import styled from 'styled-components';
export const Wrapper = styled.section`
    align-items:flex-start;
    flex-flow:column;
    padding:.25rem;
    width:100%;
    &,
    & > *{
        display:flex;
    }
    & > *{
        align-items:center;
        justify-content:flex-start;
        width:100%;
    }
    &.biography{
        grid-column:1/4;
    }
    &.education{
        grid-column:4/-1;
    }
    &.programming{
        grid-column:1/6;
    }
    &.passions{
        grid-column:1/-1;
    }
    & > h2{
        font-size:4rem;
        line-height:2.4;
        text-align:start;
    }
    & > p {
        color:${({theme}) => theme.colors.gray};
        font-size:1.8rem;
        line-height:2;
        padding:.45rem;
        text-align:justify;
    }
    & > figure{
        aspect-ratio:16/9;
        margin:auto;
        position:relative;
        width:95%;
    }

    @media only screen {
        @media (min-width:1450px){
            & > h2{
                font-size:5rem;
                line-height:2.4;
            }
            & > p {
                font-size:1.85rem;
                line-height:2;
            }
            &.biography{
                grid-column:1/5;
            }
            &.education{
                grid-column:5/-1;
            }       
        }
    }
`