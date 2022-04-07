import { motion } from 'framer-motion';
import styled from 'styled-components';
export const HeroWrapper = styled(motion.header)`
    display:grid;
    grid-template-columns:2.5fr 2fr;
    min-height:60rem;
    & > div{
        height:100%;
        width:100%;
        &:last-of-type{
            height:100%;
            row-gap:3rem;
            & > div{
                &:last-of-type{
                    position:relative;
                    width:100%;
                    & > div{
                        max-width:95%;
                        width:55rem;
                    }
                }
            }
        }
        &,
        &:last-of-type > div{
            align-items:center;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
    }
    @media only screen and (max-width:1200px){
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:2rem 0;
        row-gap:1rem;
    }
`