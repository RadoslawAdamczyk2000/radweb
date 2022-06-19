import styled from 'styled-components';
export const ProjectCardWrapper = styled.li`
    aspect-ratio:10/5;
    max-height:auto;
    max-width:95%;
    width:55rem;
    & > a {
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        height:100%;
        position:relative;
        width:100%;
        & > div{
            &,
            & > figure,
            & > figcaption{
                height:100%;
                width:100%;
            }
            & > figure{
                position:relative;
                transition:.2s .1s linear filter, .2s .1s linear transform;
            }
            & > figcaption{
                background-color:hsla(0,100%,0%,.65);
                flex-flow:column;
                row-gap:1rem;
                &,
                & > * ,
                & > * > li{
                    align-items:center;
                    display:flex;
                    justify-content:center;
                }
                & > * {
                    width:100%;
                }
                & > h3{
                    font-size:3.25rem;
                    font-weight:500;
                    padding:.25rem .85rem;
                    transition:.2s linear color;
                    &:focus,
                    &:hover{
                        color:${({theme}) => theme.colors.secondary};
                    }
                }
                & > ul {
                    gap:.25rem;
                    & > li {
                        font-size:2.5rem;
                        height:3.5rem;
                        width:3.5rem;
                    }
                }
            }
            &:first-of-type{
                overflow:hidden;
                position:relative;
             
            }
            &:last-of-type{
                left:0;
                opacity:0;
                position:absolute;
                top:0;
                transition:.15s linear opacity, .15s linear visibility; 
                visibility:hidden;
            }
        }

        &:focus,
        &:hover {
            & > div{
                & > figure{
                    filter:blur(.15rem) saturate(60%);
                    transform:scale(1.15);
                }
                opacity:1;
                visibility:visible;
            }
        }
    }
    @media only screen {
        @media (max-width:450px){
            aspect-ratio:10/5;
            & > a {
                & > div{
                    & > figcaption{
                    row-gap:.5rem;
                        & > h3{
                        font-size:2.45rem;
                        }
                        & > ul {
                            & > li {
                            font-size:2.25rem;
                            height:3.25rem;
                            width:3.25rem;
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:350px){
            aspect-ratio:10/8;
        }
    }
`