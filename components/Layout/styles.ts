import styled from 'styled-components';
interface menuButton {
    active:boolean
}
interface themeButton {
    light:boolean
}
export const FooterWrapper = styled.footer`
    align-items:center;
    border-top:.15rem solid ${({theme}) => theme.colors.secondary};
    display:flex;
    flex-direction:column;
    row-gap:1.5rem;
    padding:1.5rem 0;
`
export const InfoWrapper = styled.section`
    flex-direction:row;
    justify-content:space-between;
    margin:auto;
    max-width:95%;
    width:120rem;
    &,
    & > div:first-of-type{
        align-items:center;
        display:flex;
        flex-wrap:wrap-reverse;
        min-height:32rem;
        
    }
    & > div:first-of-type{
        flex-direction:column;
        justify-content:space-evenly;
        max-width:85%;
        width:52rem;
        margin:auto;
        & > article{
            & > p{
                font-size:1.95rem;
                font-weight:800;
                line-height:3rem;
                margin:1rem 0;
                padding:.5rem;
                &:last-of-type{
                    font-weight:300;
                    font-size:1.8rem;
                }
            }
        }
    }

`
export const MapWrapper = styled.div`
    border-radius:1.5rem;
    height:42rem;
    margin:auto;
    max-width:85%;
    overflow:hidden;
    position:relative;
    width:40rem;
    & > iframe{
        all:unset;
        display:block;
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`
export const MenuButtonWrapper = styled.div<menuButton>`
    background-color:red;
`
export const MenuFooterWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap-reverse;
    justify-content:space-around;
    padding:.5rem 0;
    max-width:85%;
    width:90rem;
    & > div{
        margin:0 auto;
        width:25rem;
        & > h4{
            color:${({theme}) => theme.colors.color};
            font-size:3rem;
            padding:1.5rem .25rem;
        }
        & > address,
        & > menu{
            align-items:start;
            display:flex;
            flex-direction:column;
            font-style:normal;
            justify-content:center;
            padding:1rem .75rem;
            row-gap:2rem;
            & > a,
            & > li > a{
                color:${({theme}) => theme.colors.primary};
                font-size:1.75rem;
                font-weight:600;
                transition:.2s linear color;
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.color};
                }
            }
        }
    }
`
export const NewsletterWrapper = styled.div`
    align-items:baseline;
    background:red;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    gap:3rem;
    max-width:95%;
    width:75rem;
    & > section{
        background-color:darkgreen;
        & > h4{
            font-size:2.6rem;
        }
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.7rem;
            line-height:3rem;
        }
    }
   
`
export const ThemeButtonWrapper = styled.div<themeButton>`
    background-color:red;
`
export const SocialsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:1rem;
    justify-content:flex-start;
    padding:1rem 2rem;
    width:100%;
    & > .social{
        height:3.5rem;
        width:3.5rem;
        &,
        & > a{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > a{
            color:${({theme}) => theme.colors.primary};
            font-size:2.5rem;
            height:100%;
            transition:.15s linear color,.15s linear transform;
            position:relative;
            width:100%;
            &::before{
                background-color:${({theme}) => theme.colors.color};
                bottom:0;
                height:.35rem;
                left:0;
                transition:.2s linear width;
                width:0;
            }
        }
        &:focus,
        &:hover{
            & > a{
                color:${({theme}) => theme.colors.color};
                transform:scale(1.25);
                &::before{
                    width:100%;
                }
            }
        }
    }
`