import Image from "next/image"
import { IntHeroPage } from "../../../types/interface";
import Search from "../Search/Search";
import { HeroImageWrapper, HeroSearchWrapper } from "./styles";
const Hero = ({content,handle,image,isVertical,placeholder,title,withImage,withSearch}:IntHeroPage) => {
    return(
        <>
            {
                withSearch &&
                <HeroSearchWrapper>
                    <div>
                        <section className="content">
                            <h1 className="title">
                                {title}
                            </h1>
                            <p className="content">
                                {content}
                            </p>
                        </section>
                        <div className="search">
                            <Search
                                handle={handle}
                                title={title}
                                placeholder={placeholder}
                            />
                        </div>
                    </div>
                    <div className='image'>
                        <figure>
                            <Image
                                alt={title}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                                style={{
                                    borderRadius:'1.25rem'
                                }}
                                title={title}
                            />
                        </figure>
                    </div>
                </HeroSearchWrapper>
            }
            {
                withImage &&
                <HeroImageWrapper vertical={isVertical}>
                    <section className="content">
                        <h1 className="title">
                            {title}
                        </h1>
                        <p className="content">
                            {content}
                        </p>
                    </section>
                    <div className='image'>
                        <figure>
                            <Image
                                alt={title}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                                style={{
                                    borderRadius:'1.25rem'
                                }}
                                title={title}
                            />
                        </figure>
                    </div>
                </HeroImageWrapper>
            }
        </>
    )
}
export default Hero;