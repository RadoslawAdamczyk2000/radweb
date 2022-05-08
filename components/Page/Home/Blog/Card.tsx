import Image from "next/image"
import Link from "next/link"
import { IntBlogCard } from "../../../../types/interface";
import { CardWrapper } from "./styles";
interface i {
    link:string;
    tag:string;
}
const Card = ({date,image,link,tags,title}:IntBlogCard) => {
    return(
        <CardWrapper title={title}>
            <Link href={link}>
                <a>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            style={{
                                borderRadius:'1.2rem 1.2rem 0 0'
                            }}
                            quality={55}
                        />
                    </figure>
                    <figcaption>
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <ul>
                            {tags.map(({link,tag}:i,key:number) =>
                                <li key={key}>
                                    <Link href={link}>
                                        <a>
                                            {tag}
                                        </a>
                                    </Link>
                                </li>   
                            )}
                        </ul>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;