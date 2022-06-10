import Image from "next/image"
import SectionButton from "../../../../All/Button/SectionButton/SectionButton"
import { IntContent } from "./interface";
import { ContentWrapper } from "./styles";

const Content = ({button,content,image,path,title}:IntContent) => {
    return(
        <ContentWrapper>
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
                    <h2>Projekty</h2>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                    <SectionButton
                        title={button}
                        path={path}
                    />
                </section>
            </div>
        </ContentWrapper>
    )
}
export default Content;