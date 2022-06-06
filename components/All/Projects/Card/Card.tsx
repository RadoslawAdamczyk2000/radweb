import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { IntCard } from "./interface"
import { CardWrapper } from "./styles"
const Card = ({excerpt,image,path,stack,title}:IntCard) => {
    return(
        <CardWrapper>
            <Link href={path}>
                <a>
                    <figure>
                        <div>
                            <Image
                                alt={title}
                                layout="fill"
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                                title={title}
                                quality={50}
                            />
                        </div>
                    </figure>
                    <figcaption>
                        <h1 className='title'>{title}</h1>
                        <ul className='stacks'>
                            {stack.map((item:ReactElement,key:number) => 
                                <li className='stack' key={key}>{item}</li>
                            )}
                        </ul>
                        <p className='excerpt' dangerouslySetInnerHTML={{__html:excerpt.substr(0,150) + '...'}}/>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;