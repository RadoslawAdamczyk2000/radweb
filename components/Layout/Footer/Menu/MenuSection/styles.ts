import styled from 'styled-components';
export const MenuSectionWrapper = styled.div`
    & > .head{
        align-items:center;
        display:flex;
        flex-flow:row nowrap;
        justify-content:flex-start;
        height:3rem;
        width:100%;
        & > h3{
            font-weight:800;
            font-size:2rem;
            height:100%;
            padding:0 .5rem;
        }
        & > .button{
            display:none;
        }
        @media only screen {
            @media (max-width:715px){
                & > .button{
                    align-items:center;
                    cursor:pointer;
                    display:flex;
                    font-size:2.2rem;
                    height:100%;
                    justify-content:center;
                    width:3rem;
                }        
            }
        }
        
    }
    & > ul{
        align-items:flex-start;
        display:flex;
        flex-flow:column;
        justify-content:flex-start;
        padding:.5rem;
        row-gap:.5rem;
        width:100%;
    }
`