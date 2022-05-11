import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { IntProjectHomeCard } from "../../../../types/interface";
import StackItem from "./StackItem";
import { CardWrapper } from "./styles";
interface i {
    icon:ReactElement;
    title:string;
}
const Card = ({content,image,link,stack,title}:IntProjectHomeCard) => {
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
                        />
                    </figure>
                    <figcaption>
                        <div>
                            <h3>{title}</h3>
                            <ul>
                                {stack.map(({icon,title}:i,key:number) =>
                                    <StackItem
                                        icon={icon}
                                        key={key}
                                        title={title}
                                    />
                                )}
                            </ul>
                            <p>{content.substr(0,155)}...</p>
                        </div>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;