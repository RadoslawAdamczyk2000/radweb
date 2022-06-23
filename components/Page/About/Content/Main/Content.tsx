import Image from "next/image";
import { IntContent } from "./interface";
import { Wrapper } from "./styles";
const Content = ({content,cn,image,title}:IntContent) => {
    return(
        <Wrapper className={cn}>
            {title && <h2 dangerouslySetInnerHTML={{__html:title}} />}
            <p dangerouslySetInnerHTML={{__html:content}} />
            {
                (image && title) &&
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        title={title}
                        quality={75}
                    />
                </figure>
            }

        </Wrapper>
    )
}
export default Content;