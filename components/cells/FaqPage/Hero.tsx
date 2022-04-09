import Search from "../../atoms/AllPages/Search";
import HeroContent from "../../atoms/FaqPage/HeroContent";
import Tags from "../../bacterias/FaqPage/Tags";
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    content : string,
    handle : any,
    place : string,
    tags : Array<any>,
    title : string
}
const Hero = ({content,handle,place,tags,title}:i) => {
    return(
        <HeroWrapper
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
        >
            <div>
                <HeroContent content={content} title={title}/>
            </div>
            <div>
                <div>
                    <Tags tags={tags}/>
                </div>
                <div>
                    <Search handle={handle}/>
                </div>
            </div>
        </HeroWrapper>
    )
}
export default Hero;