import Image from "next/image";
import { IntHeroPage } from "../../types/interface"
import Search from "./Search";
import { HeroWrapper } from "./styles";
const Hero = ({content,handle,image,imageTitle,isHome,nameSearch,title}:IntHeroPage) => {
    return(
        <>
            {
                isHome ?
                <HeroWrapper className='home'>
                    <section>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </section>
                    <figure>
                        <Image
                            alt={imageTitle}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            style={{
                                borderRadius:'3rem'
                            }}
                        />
                    </figure>
                </HeroWrapper> :
                <HeroWrapper className='page'>
                    <div>
                        <section>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </section>
                        {handle && <Search handle={handle} name={nameSearch}/>}
                    </div>
                    <figure>
                        <Image
                            alt={imageTitle}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                        />
                    </figure>
                </HeroWrapper>
            }
        </>
    )
}
export default Hero;