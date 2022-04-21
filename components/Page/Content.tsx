import Image from "next/image"
import Link from "next/link"
import { IntContentPage } from "../../types/interface";
const Content = ({button,content,imagePath='',imageTitle,movie,moviePath,path='',primary,title,withMedia=false}:IntContentPage) => {
    return(
        <>
            {
                withMedia &&
                <section className={primary ? 'primary' : 'secondary'}>
                    <div className='media'>
                        {
                            movie ?
                            <iframe 
                                src={moviePath}
                                title="YouTube video player" 
                                allowFullScreen
                            /> :
                            <figure>
                                <Image
                                    alt={imageTitle}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    src={imagePath}
                                    style={{
                                        borderRadius:'1rem'
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
                </section>
            }
        </>
    )
}
export default Content;