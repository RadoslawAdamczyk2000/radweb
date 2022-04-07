import Image from "next/image";
import Link from "next/link"
import Button from "../../AllPages/Button";
import {CardWrapper} from './styles/CardWrapper';
interface i {
    button : string,
    content : string,
    image : string,
    path : string,
    title : string
}
const Card = ({button,content,image,path,title}:i) => {
    return(
        <CardWrapper>
            <Image
                alt={`${title} image`}
                className='poster'
                loading="lazy"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                src={image}
                title={`${title} image`}
            />
            <figcaption>
                <div>
                    <Link href={path}>
                        <a>
                            <h5>{title}</h5>
                        </a>
                    </Link>
                    <p>{content.substr(0,127)}...</p>
                    <Button
                        isPage={true}
                        isSecondary={false}
                        isSection={false}
                        path={path}
                        title={button}
                    />
                </div>
            </figcaption>
        </CardWrapper>
    )   
}
export default Card;