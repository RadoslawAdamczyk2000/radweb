import Image from "next/image"
import Link from "next/link"
import { IntContentPage } from "../../types/interface";
import { ContentMediaWrapper, ContentWithoutMediaWrapper } from "./styles";
const Content = ({button,content,imagePath='',imageTitle,isVertical,movie,moviePath,path='',primary,title,withMedia=false}:IntContentPage) => {
    return(
        <>
            {
                withMedia ?
                <ContentMediaWrapper className={primary ? 'primary' : 'secondary'}>
                    <div className='media'>
                        {
                            movie ?
                            <div>
                                <iframe 
                                    src={moviePath}
                                    title="YouTube video player" 
                                    allowFullScreen
                                /> 
                            </div>:
                            <figure>
                                <Image
                                    alt={imageTitle}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    src={imagePath}
                                    style={{
                                        borderRadius:'1rem',
                                        margin:'auto'
                                    }}
                                />
                            </figure>
                        }
                    </div>
                    <div className='content'>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        {button && <Link href={path}><a>{button}</a></Link>}
                    </div>
                </ContentMediaWrapper> :
                <ContentWithoutMediaWrapper className={isVertical ? 'vertical' : 'horizontal'}>
                    <article>
                        <h2>{title}</h2>
                        <div>
                            <p>{content}</p>
                            {button && <Link href={path}><a>{button}</a></Link>}
                        </div>
                    </article>
                </ContentWithoutMediaWrapper>
            }
        </>
    )
}
export default Content;