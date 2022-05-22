import Image from "next/image"
import Link from "next/link"
import { IntCertificateCard } from "../../../../../types/interface"
import { CardWrapper } from "./styles"
const Card = ({content,image,path,title,source}:IntCertificateCard) => {
    return(
        <CardWrapper>
            <figure>
                <Image
                    alt={`${title} - ${source}`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={`${title} - ${source}`}
                />
            </figure>
            <div>
                <h3>{title}</h3>
                <Link href={path}>
                    <a target='_blank' rel='noopener noreferrer noindex nofollow'>
                        {source}
                    </a>
                </Link>
                <p>
                    {content.substr(0,200)}
                </p>
            </div>
        </CardWrapper>
    )
}
export default Card;