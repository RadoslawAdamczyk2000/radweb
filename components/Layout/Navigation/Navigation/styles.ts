import styled,{css} from 'styled-components';
import { IntNavigation } from './interface';
export const NavigationWrapper = styled.nav<IntNavigation>`
    background-color:${({theme}) => theme.colors.background};
    display:grid;
    grid-template-columns:15rem calc(100% - 15em) 5rem;
    height:5rem;
    top:0;
    width:100%;
    z-index:999;
    ${({isHome}) => isHome ? 
        css`
            position:fixed;
        ` :
        css`
            position:sticky;
        `
    }
    @media only screen{
        @media (max-width:840px){
            background-color:${({theme}) => theme.colors.background};
            grid-template-areas:
                "brand options options options"
                "menu menu menu menu";
            height:auto;
            grid-template-rows:4rem auto;
            position:sticky;
            top:0;       
            & > div{
                &:first-of-type{
                    grid-area:brand;
                }
                &:last-of-type{
                    grid-area:options;
                }
            }
            & > menu {
                grid-area:menu;
            }
            
        }
    }
`