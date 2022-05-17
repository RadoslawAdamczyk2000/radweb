import Image from "next/image"
import Link from "next/link"
import { IntBlogCardPage } from "../../../../types/interface";
import { CardWrapper } from "./styles";
const Card = ({content,date,image,link,tags,title}:IntBlogCardPage) => {
    return(
        <CardWrapper>
            <Link href={link}>
                <a>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            loading='lazy'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            title={title}
                            quality={40}
                        />
                    </figure>
                    <figcaption>
                        <p className='date'>{date}</p>
                        <h2 className='title'>{title}</h2>
                        <p className='content'>
                            {content.substr(0,150)}...
                        </p>
                        <ul className='tags'>
                            {tags.map((item:string,key:number) =>
                                <li key={key} className='tag'>
                                    {item}
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