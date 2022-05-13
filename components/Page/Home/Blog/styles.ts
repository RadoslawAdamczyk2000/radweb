import styled from 'styled-components';
export const BlogWrapper = styled.section`
    background: #ddd;
    border-radius:2rem;
    flex-flow:column;
    justify-content:start;
    & > * {
        align-items:flex-start;
        width:100%;
    }
    &,
    & > *{
        display:flex;
    }
    & > article{
        /* background-color:gray; */
        flex-flow:column;
        padding:2rem 3rem;
        row-gap:1rem;
        & > h2{
            font-size:5.5rem;
            font-weight:500;
        }
        & > a{
            background-color:pink;
            border-radius:1.5rem;
            font-size:1.8rem;
            font-weight:700;
            padding:1rem 2rem;
        }
    }
    & > ul{
        flex-flow:row nowrap;
        gap:1.5rem;
        justify-content:flex-start;
        overflow:scroll;
        padding:3rem 2rem;
    }
`
export const CardWrapper = styled.li`
    flex-shrink:0;
    /* max-width:99.9%; */
    width:30rem;
    & > a{
        height:100%;
        &,
        & > *{
            align-items:start;
            display:flex;
            flex-flow:column;
            justify-content:start;
            width:100%;
        }
        & > figure{
            height:30rem;
            filter:saturate(40%) brightness(85%);
            position:relative;
            transition:.2s linear filter;
        }
        & > figcaption{
            & > * {
                padding:.25rem .2rem;
                width:100%;
            }
            & > h3{
                font-size:1.7rem;
                transition:.2s linear color;
            }
            & > p {
                text-align:end;
                font-size:1.5rem;
            }
            & > ul{
                align-items:center;
                display:flex;
                flex-flow:row wrap;
                gap:.2rem;
                justify-content:flex-end;
                padding:.8rem .4rem;
                & > li{
                    & > a{
                        align-items:center;
                        background-color:pink;
                        border-radius:2rem;
                        display:flex;
                        font-size:1.5rem;
                        font-weight:500;
                        justify-content:center;
                        padding:.25rem .75rem;
                        transition:.2s linear background-color,.2s linear color;
                        &:focus,
                        &:hover{
                            background-color:fuchsia;
                            color:white;
                        }
                    }
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figure{
                filter:saturate(100%) brightness(100%);
            }
            & > figcaption > h3 {
                color:purple;
            }
        }
    }
`