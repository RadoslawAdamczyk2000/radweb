import { motion } from "framer-motion";

import Buttons from "../../../atoms/HomePage/Hero/Buttons"
import Content from "../../../atoms/HomePage/Hero/Content"
import Poster from "../../../atoms/HomePage/Hero/Poster"
import { HeroWrapper } from "./styles/HeroWrapper"
import river from '../../../../assets/images/river.webp';
const Hero = () => {
    return(
        <HeroWrapper
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
        >
            <motion.div 
                className="content"
                initial={{x:-10}}
                animate={{x:0}}
                exit={{x:10}}
                
            >
                <Content/>
                <Buttons/>
            </motion.div>
            <motion.div 
                className="poster"
                initial={{x:10}}
                animate={{x:0}}
                exit={{x:-10}}
            >
                <Poster
                    path={river}
                    title=''
                />
            </motion.div>
        </HeroWrapper>
    )
}
export default Hero;