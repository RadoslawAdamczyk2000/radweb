import Image from "next/image";
import { IntHeroBlog } from "../../../../types/interface";
import Search from "../Search/Search";
import { HeroWrapper } from "./styles";
const Hero = ({content,handle,image,placeholder,title}:IntHeroBlog) => {
    return(
        <HeroWrapper>
            <div>
                <section>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </section>
                <Search
                    handle={handle}
                    placeholder={placeholder}
                    title={title}
                />
            </div>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                />
            </figure>
        </HeroWrapper>
    )
}
export default Hero;