import styled from 'styled-components';
export const PostContentWrapper = styled.section`
    align-items:start;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:5rem auto;
    & > h2,
    & > h3{
        color:${({theme}) => theme.colors.color};
        font-size:2.5rem;
    }
    & > h2{
        padding:1rem 2rem;
        font-weight:600;
    }
    & > h3{
        padding:1rem 4rem;
        font-weight:400;
    }
    & > div{
        font-size:1.9rem;
        line-height:3.4rem;
        p{
            color:${({theme}) => theme.colors.primary};
            font-weight:200;
            text-align:start;
        }
        ul{
            list-style:circle;
            li{
                color:${({theme}) => theme.colors.primary};
                list-style:circle;
                margin:0 0 0 4rem;
            }
        }
    }
`