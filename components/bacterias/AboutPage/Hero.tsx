import HeroContent from "../../atoms/AboutPage/HeroContent";
import HeroPoster from "../../atoms/AboutPage/HeroPoster";
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    content : string,
    image : string,
    links : Array<string>,
    title:string
}
const Hero = ({content,image,links,title}:i) => {
    return(
        <HeroWrapper
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
        >
            <div>
                <HeroContent
                    content={content}
                    links={links}
                    title={title}
                />
            </div>  
            <div>
                <HeroPoster
                    image={image}
                />
            </div>
        </HeroWrapper>
    )
}
export default Hero;