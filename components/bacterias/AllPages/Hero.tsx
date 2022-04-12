import Content from "../../atoms/AllPages/Content";
import Poster from "../../atoms/AllPages/Poster";
import Search from "../../atoms/AllPages/Search";
import Title from "../../atoms/AllPages/Title";
import { motion } from 'framer-motion';
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    altImage : string,
    content : string,
    handle ?: any,
    image : string,
    isPage ?: boolean,
    title : string,
}
const Hero = ({altImage,content,handle,image,isPage=false,title}:i) => {
    return(
        <>
            {
                isPage &&
                <HeroWrapper isPage={true}>
                    <motion.div className="content"
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        <div>
                            <Title 
                                title={title} 
                                isPage={true}
                            />
                            <Content 
                                content={content} 
                                isHero={true}
                            />
                        </div>
                        <div>
                            <Search handle={handle} />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="poster"
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        <Poster altImage={altImage} image={image} isHero={true}/>
                    </motion.div>
                </HeroWrapper>
            }
        </>
    )
}
export default Hero;