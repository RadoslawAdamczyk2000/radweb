import styled from "styled-components";
export const HeadWrapper = styled.section`
    display:grid;
    grid-template-columns:1fr 2fr;
    min-height:40rem;
    width:100%;
    & > .title{
        align-items:start;
        padding:1rem 0;
        & > h2{
            font-size:4.25rem;
        }
    }
    & > .content{
        align-items:center;
        flex-direction:column;
        row-gap:2rem;
        & > div {
            font-size:2.2rem;
            font-weight:300;
            line-height:3.4rem;
            max-width:95%;
            text-align:start;
            width:55rem;
            b{
                color:${({theme}) => theme.colors.tertiary};
            }
        }
    }
    & > .content,
    & > .title{
        display:flex;
        justify-content:center;
        width:100%;
    }
    @media only screen and (max-width:1050px){
        align-items:start;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:3rem;
        & > .title{
            & > h2{
                font-size:3rem;
            }
        }
        & > .content{
            row-gap:2.5rem;
            & > div {
                font-size:1.7rem;
                line-height:2.8rem;
            }
        }
    }
`