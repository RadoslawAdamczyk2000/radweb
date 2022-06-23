import Image from "next/image"
import { IntHero } from "./interface";
import { Wrapper } from "./styles";
const Hero = ({author,tags,title}:IntHero) => {
    return(
        <Wrapper>
            <section>
                <h1 dangerouslySetInnerHTML={{__html:title}} />
            </section>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src='/assets/images/solider.webp'
                    title={title}
                />
            </figure>
            <section>
                <h2 dangerouslySetInnerHTML={{__html:author}} />
                <ul>
                    {tags.map((item:string,key:number) =>
                        <>
                            <li key={key}>{item}</li>
                            <span/>
                        </>
                    )}
                </ul>
            </section>
        </Wrapper>
    )
}
export default Hero;