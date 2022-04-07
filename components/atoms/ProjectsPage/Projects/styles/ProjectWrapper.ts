import styled from 'styled-components';
export const ProjectWrapper = styled.li`
    align-items:center;
    cursor:pointer;
    display:flex;
    height:25rem;
    justify-content:center;
    position:relative;
    width:45rem;
    & > div,
    & > div > div,
    & > figure{
        height:100%;
        width:100%;
    }
    & > div{
        background-color:${({theme}) => theme.colors.color};
        opacity:0;
        position:absolute;
        transition:.2s linear opacity,.2s linear visibility;
        visibility:hidden;
        & > div{
            flex-direction:column;
            row-gap:2.5rem;
            &,
            & > ul,
            & > ul > li{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > h4{
                color:${({theme}) => theme.colors.background};
                font-size:2.5rem;
                padding:.75rem 1.5rem;
                text-align:center;
                user-select:none;
                width:100%;
            }
            & > ul{
                flex-direction:row;
                flex-wrap:wrap;
                gap:1rem;
                & > li{
                    color:${({theme}) => theme.colors.primary};
                    font-size:3rem;
                    height:3.5rem;
                    width:3.5rem;
                }
            }
        }
    }
    &:focus,
    &:hover {
        & > div{
            opacity:1;
            visibility:visible;
        }
    }
`