import Image from "next/image";
import { ReactChild } from "react";
import Search from "../AllPages/Search";
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    children : ReactChild,
    handle ?: any,
    image : string,
    imageTitle : string,
    isAbout ?: boolean,
    isFaq ?: boolean,
    isHome ?: boolean,
    isPage ?: boolean,
    isSearch ?: boolean,
    title : string
}
const Hero = ({children,handle,image,imageTitle,isAbout=false,isFaq=false,isHome=false,isPage=false,isSearch=false,title}:i) => {
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
                <HeroWrapper className='about'>
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
                isPage &&
                <HeroWrapper className='page'>
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
                isSearch &&
                <HeroWrapper className='search'>
                    <article>
                        <h1>{title}</h1>
                        <p>{children}</p>
                        <Search
                            handle={handle}
                        />
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
                isFaq &&
                <HeroWrapper className='search'>
                    <article>
                        <h1>{title}</h1>
                        <p>{children}</p>
                        <Search
                            handle={handle}
                        />
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
        </>       
    )
}
export default Hero;