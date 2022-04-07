import Image from "next/image"
import { HeroWrapper } from "./styles/HeroWrapper";
import { motion } from 'framer-motion';
interface i {
    content : string | any,
    image : string,
    title : string
}
const Hero = ({content,image,title}:i) => {
    return(
        <HeroWrapper
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
        >
            <motion.article
                initial={{x:-10}}
                animate={{x:0}}
                exit={{x:10}}
            >
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{__html:content}} />
            </motion.article>
            <motion.figure
                initial={{x:-10}}
                animate={{x:0}}
                exit={{x:10}}
            >
                <Image
                    alt={`${title} - zdjęcie`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    style={{
                        borderRadius:'2rem'
                    }}
                />
            </motion.figure>
        </HeroWrapper>
    )
}
export default Hero;