import Image from "next/image";
import { ImgWrapper } from "./Post";
interface i {
    isMain ?: boolean,
    path : string,
    title : string
}
const Img = ({isMain=true,path,title}:i) => {
    return(
        <ImgWrapper className={isMain ? 'main' : 'section'}>
            <Image
                alt={title}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                priority={isMain}
                src={path}
                style={{
                    borderRadius:'3rem'
                }}
            />
        </ImgWrapper>
    )
}
export default Img;