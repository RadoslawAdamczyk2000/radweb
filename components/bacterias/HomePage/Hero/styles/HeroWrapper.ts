import { motion } from "framer-motion";
import styled from "styled-components";
export const HeroWrapper = styled(motion.header)`
    display:grid;
    grid-template-columns:3fr 2fr;
    margin:auto;
    min-height:80rem;
    max-width:95%;
    & > .content{
        row-gap:2.5rem;
    }
    & > .content,
    & > .poster{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;

    }
    @media only screen and (max-width:1350px){
        align-items:center;
        display:flex;
        flex-direction:column-reverse;
        justify-content:center;
        row-gap:1.75rem;
        padding:5rem 0;
    }
`