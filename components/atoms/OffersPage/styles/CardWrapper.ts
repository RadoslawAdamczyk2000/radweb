import styled from 'styled-components';
export const CardWrapper = styled.li`
    background-color:${({theme}) => theme.colors.secondary};
    border-radius:3.25rem;
    padding:3.5rem 2.5rem;
    max-width:95%;
    width:55rem;
    &,
    & > article {
        align-items:start;
        display:flex;
        justify-content:center;
    }
    & > article{
        flex-direction:column;
        row-gap:1rem;
        & > h2{
            color:${({theme}) => theme.colors.tertiary};
            font-size:2.75rem;
            line-height:5rem;
        }
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.8rem;
            line-height:3rem;
        }
        & > strong{
            font-size:2.4rem;
            margin:2rem auto;
        }
    }
    @media only screen and (max-width:850px){
        max-width:99%;
        padding:1.5rem 1.5rem;
        width:65rem;
        & > article{
        flex-direction:column;
        row-gap:1.2rem;
            & > h2{
                font-size:2.25rem;
                line-height:4.5rem;
            }
            & > p {
                color:${({theme}) => theme.colors.color};
                font-size:1.65rem;
                line-height:2.7rem;
            }
            & > strong{
                font-size:2.2rem;
                margin:2rem auto;
            }
        }
        a:last-of-type{
            font-size:1.9rem;
        }
    }
`