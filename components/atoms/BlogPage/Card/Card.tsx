import Image from "next/image"
import Link from "next/link"
import {RiTimeLine} from 'react-icons/ri';
import { CardWrapper } from "./styles/CardWrapper";
interface i {
    date : string,
    image : string,
    path : string,
    readTime : number | string,
    time : string,
    title : string
}
const Card = ({image,path,time,title,readTime}:i) => {
    return(
        <Link href={path}>
            <a>
                <CardWrapper>
                    <figure>
                        <Image
                            alt={`${title} - image`}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            style={{
                                borderRadius:'2rem',
                                maxWidth:'95%'
                            }}
                        />
                    </figure>
                    <figcaption>
                        <p>{time} - <i><RiTimeLine/></i>{readTime}min</p>
                        <h5>{title}</h5>
                    </figcaption>
                </CardWrapper>
            </a>
        </Link>
    )
}
export default Card;