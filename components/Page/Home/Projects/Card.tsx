import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { IntProjectHomeCard } from "../../../../types/interface";
import { CardWrapper } from "./styles";
interface i {
    icon:ReactElement;
    title:string;
}
const Card = ({content,image,isBig,link,stack,title}:IntProjectHomeCard) => {
    return(
        <CardWrapper className={isBig ? 'big' : 'small'}>
            <Link href={link}>
                <a>
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
                    <figcaption>
                        <ul>
                            {stack.map(({icon,title}:i,key:number) => 
                                <li key={key} title={title}>
                                    {icon}
                                </li>
                            )}
                        </ul>
                        <h3>{title}</h3>
                        <p>{
                            isBig ?
                            content.substr(0,170):
                            content.substr(0,100)
                            
                        }...</p>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;