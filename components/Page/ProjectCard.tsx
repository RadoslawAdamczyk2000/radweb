import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { IntProjectCard } from "../../types/interface"
import { ProjectCardWrapper } from "./styles"
const ProjectCard = ({excerpt='',image,imageTitle,isHome,path,socials,title}:IntProjectCard) => {
    return(
        <>
            {
                isHome ? 
                <ProjectCardWrapper className='home'>
                    <Link href={path}>
                        <a rel='index follow'>
                            <figcaption className='content'>
                                <h5 className='title'>{title}</h5>
                                <ul className='socials'>{socials.map((item:ReactElement,key:number) => <li  className='social' key={key}>{item}</li>)}</ul>
                                <p className='excerpt'>{excerpt.substr(0,97)}...</p>
                            </figcaption>
                            <figure className='image'>
                                <Image
                                    alt={imageTitle}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    src={image}
                                />
                            </figure>
                        </a>
                    </Link>
                </ProjectCardWrapper> :
                <ProjectCardWrapper className='page'>
                    <Link href={path}>
                        <a rel='index follow'>
                            <figure className='image'>
                                <Image
                                    alt={imageTitle}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    src={image}
                                />
                            </figure>
                            <figcaption className='content'>
                                <h5 className='title'>{title}</h5>
                                <ul className='socials'>{socials.map((item:ReactElement,key:number) => <li  className='social' key={key}>{item}</li>)}</ul>
                            </figcaption>
                        </a>
                    </Link>
                </ProjectCardWrapper>
            }
        </>
    )
}
export default ProjectCard;