import Image from "next/image"
import Link from "next/link"
import { IntProjectCard } from "./interface";

const ProjectCard = ({image,path,stack,title}:IntProjectCard) => {
    return(
        <li>
            <Link href={path}>
                <a>
                    <div>
                        <figure>
                            <Image
                                alt=''
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                            />
                        </figure>
                    </div>
                    <div>
                        <figcaption>
                            <h3>{title}</h3>
                            <ul>
                                {stack.map((item,index) =>
                                    <li key={index}>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </figcaption>
                    </div>
                </a>
            </Link>
        </li>
    )
}
export default ProjectCard;