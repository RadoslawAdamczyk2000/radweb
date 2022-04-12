import styled from 'styled-components';
export const ProjectCardWrapper = styled.div`
    align-items:center;
    /* background:yellow; */
    display:flex;
    height:100vh;
    justify-content:center;
    left:0;
    position:fixed;
    top:0;
    width:100vw;
    z-index:9999999999999999999999;
   .card{
       background-color:#fff;
       border-radius:.85rem;
       box-shadow:0 0 4rem 1rem hsla(0,100%,0%,.25);
       height:60rem;
       margin:auto;
       max-width:85%;
       width:95rem;
       @media only screen and (max-width:900px){
           height:auto;
           width:65rem;
       }
       .close{
           height:4rem;
           justify-content:end;
           padding-right:2rem;
           &,
           & > button{
            align-items:center;
            display:flex;
           }
           & > button{
               color:#000;
               font-size:2.75rem;
               height:3rem;
               justify-content:center;
               transition:.2s linear transform;
               width:3rem;
               &:focus,
               &:hover{
                   transform:scale(.9);
               }
           }
       }
       .box{
           display:grid;
           grid-template-columns:2.5fr 3fr;
           height:calc(100% - 4rem);
           padding:1rem;
           width:100%;
           @media only screen and (max-width:900px){
            display:flex;
            flex-direction:column;
            justify-content:center;
            row-gap:2rem;
           }
           & > .content,
           & > .picture{
               align-items:center;
               display:flex;
               justify-content:center;
               width:100%;
           }
           & > .picture{
               position:relative;
               @media only screen and (max-width:900px){
                   height:20rem;
                   width:100%;
                }
           }
           & > .content{
               flex-direction:column;
               position:relative;
               row-gap:2rem;
               & > h2{
                    color:#000;
                    font-size:3.5rem;
                    padding:.25rem 2rem;
                    text-align:center;
                    width:100%;
               }
               & > p{
                    color:#555;
                    font-size:1.9rem;
                    font-weight:400;
                    line-height:3rem;
                    padding:.25rem 2rem;
                    text-align:start;
                    width:100%;
               }
               & > ul{
                    flex-direction:row;
                    flex-wrap:wrap;
                    &,
                    & > li{
                        align-items:center;
                        display:flex;
                        justify-content:center;
                    }
                    & > li{
                        color:#555;
                        opacity:.5;
                        font-size:2.85rem;
                        height:4rem;
                        width:4rem;
                    }
               }
               & > a{
                    ::before{
                        background-color:#212121;
                    }
                    & > p{
                        color:#aaa;
                    }
                    & > button > i{
                        color:#aaa;
                    }
                    &:focus,
                    &:hover{
                        & > p{
                        color:#212121;
                        }
                        & > button > i{
                            color:#212121;
                        }   
                    }
               }
           }
       }
   }
`