import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
export const HeroWrapper = styled(motion.header)`
    ${({isPage}) => isPage && css`
        /* background-color:red; */
        display:grid;
        grid-template-columns:3fr 3.5fr;
        min-height:65rem;
        @media only screen and (max-width:1150px) {
            grid-template-columns:1fr;
        }
        & > div{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > .content{
            flex-direction:column;
            margin:auto;
            max-width:75%;
            row-gap:1rem;
            & > div{
                max-width:90%;
                width:65rem;
            }
        }
        & > .poster {
            padding:2rem;
            @media only screen and (max-width:1150px) {
                display:none;
            }
        }
    `}
`