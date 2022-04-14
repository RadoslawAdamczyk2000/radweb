import Image from "next/image";
import { ReactChild } from "react";
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    children : ReactChild,
    image : string,
    imageTitle : string,
    isAbout ?: boolean,
    isHome ?: boolean,
    isPage ?: boolean,
    title : string
}
const Hero = ({children,image,imageTitle,isAbout=false,isHome=false,isPage=false,title}:i) => {
    return(
        <>
            {
                isHome &&
                <HeroWrapper className='home'>
                    <article>
                        <h1>{title}</h1>
                        <p>{children}</p>
                    </article>
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
                </HeroWrapper>
            }
            {
                isAbout &&
                <header className='about'>
                    <article>
                        <h1>{title}</h1>
                        <p>{children}</p>
                    </article>
                    <section>
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
                    </section>
                </header>
            }
            {
                isPage &&
                <header className='page'>
                    <article>
                        <h1>{title}</h1>
                        <p>{children}</p>
                    </article>
                    <section>
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
                    </section>
                </header>
            }
        </>       
    )
}
export default Hero;