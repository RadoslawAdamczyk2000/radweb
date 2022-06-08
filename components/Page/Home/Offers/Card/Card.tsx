import Image from "next/image"
import Link from "next/link"
import { IntCard } from "./interface"
const Card = ({button,content,image,path,title}:IntCard) => {
    return(
        <li>
            <div>
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        quality={45}
                    />
                </figure>
                <figcaption>
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                    <div>
                        <Link href={path}>
                            <a>
                                {button}
                            </a>
                        </Link>
                    </div>
                </figcaption>
            </div>
        </li>
    )
}
export default Card;