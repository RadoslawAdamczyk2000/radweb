import Image from "next/image"
import SectionButton from "../../../../All/Button/SectionButton/SectionButton"
import { IntContent } from "./interface";

const Content = ({button,content,image,path,title}:IntContent) => {
    return(
        <div>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title=''
                    quality={60}
                />
            </figure>
            <div>
                <section>
                    <h1>Projekty</h1>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                    <SectionButton
                        title={button}
                        path={path}
                    />
                </section>
            </div>
        </div>
    )
}
export default Content;