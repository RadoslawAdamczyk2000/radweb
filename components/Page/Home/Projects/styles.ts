import styled from 'styled-components';
export const CardWrapper = styled.li`
    display:flex;
    height:30rem;
    overflow:hidden;
    width:50rem;
    @media only screen {
        @media (max-width:380px){
            height:40rem;
        }
        @media (max-width:250px){
            height:50rem;
        }
    }
    & > a {
        height:100%;
        position:relative;
        width:100%;
        & > figure{
            height:100%;
            position:relative;
            width:100%;
        }
        & > figcaption{
            background-color:hsla(0,100%,100%,1);
            height:100%;
            left:0;
            position:absolute;
            top:0;
            opacity:0;
            transition:.15s linear opacity, .15s linear visibility;
            visibility:hidden;
            width:100%;
            @media only screen {
                @media (max-width:500px){
                    background-color:hsla(0,100%,100%,.8);
                    opacity:1;
                    visibility:visible;
                }
            }
            & > div{
                align-items:center;
                display:flex;
                flex-flow:column;
                height:100%;
                justify-content:center;
                position:absolute;
                row-gap:1rem;
                width:100%;
                & > p,
                & > ul{
                    align-items:center;
                    display:flex;
                    justify-content:center;
                }
                & > h3 {
                    color:${({theme}) => theme.colors.secondary};
                    font-size:2.5rem;
                    @media only screen {
                        @media (max-width:250px){
                            font-size:2.2rem;
                        }
                    }
                }
                & > p{
                    font-size:1.7rem;
                    line-height:calc(1.7rem * 2);
                    padding:.85rem 1.15rem;
                    width:100%;
                    @media only screen {
                        @media (max-width:380px){
                            font-size:1.55rem;
                            line-height:calc(1.55rem * 2);
                        }
                    }
                }
                & > ul{
                    flex-flow:row wrap;
                    gap:.85rem;
                    width:100%;
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figcaption{
                opacity:1;
                visibility:visible;
            }
        }
    }
`
export const ProjectsWrapper = styled.section`
    & > article{
        padding:4rem 2rem;
        & > h2{
            color:${({theme}) => theme.colors.headings.title};
            font-size:4.5rem;
            @media only screen{
                @media (min-width:1500px){
                    font-size:6.5rem;
                }
                @media (max-width:900px){
                    font-size:4rem;
                }
            }
        }
        & > p{
            color:${({theme}) => theme.colors.color};
            padding:1rem;
            line-height:calc(1.6rem * 2);
            @media only screen{
                @media (min-width:1500px){
                    font-size:2.15rem;
                    line-height:calc(2.15rem * 1.5);
                }
                @media (max-width:900px){
                    font-size:1.55rem;
                }
            }
        }
    }
    & > ul{
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        gap:.25rem;
        justify-content:center;
        padding: 0.5rem;
        width:100%;
    }
    & > div{
        align-items:center;
        display:flex;
        justify-content:center;
        padding:1rem 0;
        & > a{
            background-color:${({theme}) => theme.colors.headings.title};
            border-radius:5rem;
            color:${({theme}) => theme.colors.background};
            font-size:2.4rem;
            margin:.75rem auto;
            padding:1.25rem 2rem;
            text-align:center;
            transition:.2s linear background-color,.2s linear transform;
            &:focus,
            &:hover{
                background-color:${({theme}) => theme.colors.secondary};
                transform:scaleX(.95);
            }
            @media only screen{
                @media (min-width:1500px){
                    font-size:4rem;
                    font-weight:700;
                    padding:1.5rem 3.1rem;
                }
                @media (max-width:400px){
                    font-size:2.7rem;
                }
                @media (max-width:300px){
                    font-size:2.2rem;
                }
            }
        }
    }
`
export const StackItemWrapper = styled.li`
    align-items:center;
    color:${({theme}) => theme.colors.tertiary};
    display:flex;
    font-size:2.5rem;
    height:3rem;
    justify-content:center;
    user-select:none;
    width:3rem;
    @media only screen {
        @media (max-width:250px){
            font-size:2rem;
            height:2.5rem;
            width:2.5rem;
        }
    }
`