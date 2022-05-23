import Image from "next/image";
import Link from "next/link"
import {TiArrowBack} from "react-icons/ti";
import { IntHeroArticle } from "../../types/interface";
import { HeroWrapper } from "./styles";
const Hero = ({children,date,image,path,stack,title}:IntHeroArticle) => {
    return(
        <HeroWrapper>
            <div className="return">
                <Link href={path}>
                    <a>
                        <span>
                            <TiArrowBack/>
                        </span>
                        <p>
                            wróć
                        </p>
                    </a>
                </Link>
            </div>

            <section className="content">
                <h1>{title}</h1>
                <p>{date}</p>
                <ul>
                    {
                        stack && 
                        stack.map(({icon,title},key) => 
                            <li className="stack" title={title} key={key}>{icon}</li>
                        )
                    }
                </ul>
                <p>
                    {children}
                </p>
            </section>
            
            <figure className="image">
                <Image
                    alt={title}
                    layout='fill'
                    loading='eager'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                    quality={85}
                />
            </figure>
        </HeroWrapper>
    )
}
export default Hero;