import styled from 'styled-components';

export const StepWrapper = styled.li`
    align-items:center;
    display:flex;
    gap:1rem;
    height:auto;
    width:100%;
    & > div{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        height:auto;
        &:first-of-type{
            flex-basis:50rem;
            & > p {
                color:${({theme}) => theme.colors.secondary};
                font-size:8rem;
                font-weight:900;
                opacity:.25;
                user-select:none;
                &:first-letter{
                    font-size:6rem;
                }
            }
        }
        &:last-of-type{
            flex-basis:calc(100% - 49rem);
            min-height:25rem;
            padding:3rem 2rem;
            text-align:center;
            row-gap:2rem;
            & > h3{
                color:${({theme}) => theme.colors.primary};
                font-size:3rem;
            }
            & > p{
                font-size:2rem;
                line-height:calc(2rem * 2);
            }
        }
    }
    &:nth-child(odd){
        flex-flow:row;
    }
    &:nth-child(even){
        flex-flow:row-reverse;
    }
    @media only screen {
        @media (max-width:1000px){
            & > div{
                &:first-of-type{
                    flex-basis:40rem;
                }
                &:last-of-type{
                    flex-basis:calc(100% - 39rem);
                }
            }
        }
        @media (max-width:880px){
            & > div{
                &:first-of-type{
                    flex-basis:30rem;
                }
                &:last-of-type{
                    flex-basis:calc(100% - 29rem);
                    & > h3{
                        font-size:2.7rem;
                    }
                    & > p{
                        font-size:1.8rem;
                        line-height:calc(1.8rem * 2);
                    }
                }
            }
        }
        @media (max-width:700px){
            & > div{
                &:first-of-type{
                    flex-basis:20rem;
                }
                &:last-of-type{
                    flex-basis:calc(100% - 19rem);
                }
            }
        }
        @media (max-width:600px){
            & > div{
                &:first-of-type{
                    flex-basis:15rem;
                    & > p {
                        font-size:6rem;
                        font-weight:700;
                        &:first-letter{
                            font-size:5rem;
                        }
                    }
                }
                &:last-of-type{
                    flex-basis:calc(100% - 14rem);
                    & > h3{
                        font-size:2.3rem;
                    }
                    & > p{
                        font-size:1.6rem;
                        line-height:calc(1.6rem * 2);
                    }
                }
            }
        }
        @media (max-width:500px){
            gap:.25rem;
            &:nth-child(even),
            &:nth-child(odd){
                flex-flow:column;
            }
            & > div{
                &:first-of-type,
                &:last-of-type{
                    flex-basis:auto;
                }
                &:last-of-type{
                    padding:1.5rem 2rem;
                }
            }
        }
    }
`
export const StepsWrapper = styled.section`
    & > article{
        padding:4rem 2rem;
        & > h2{
            color:${({theme}) => theme.colors.headings.title};
            font-size:4.5rem;
            text-align:center;
            @media only screen{
                @media (min-width:1500px){
                    font-size:6.5rem;
                }
                @media (max-width:900px){
                    font-size:4rem;
                }
                @media (max-width:220px){
                    font-size:3rem;
                }
            }
        }
    }
`