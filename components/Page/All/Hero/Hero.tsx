import Image from "next/image";
import { IntHeroPage } from "../../../../types/interface";
import { HeroWithImageWrapper } from "./styles";

const Hero = ({content,image,isImage,title}:IntHeroPage) => {
    return(
        <>
            {
                isImage &&
                <HeroWithImageWrapper>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {content}
                    </p>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            style={{
                                borderRadius:'2rem'
                            }}
                            title={title}
                            quality={85}
                        />
                    </figure>
                </HeroWithImageWrapper>
            }
        </>
    )
}
export default Hero;