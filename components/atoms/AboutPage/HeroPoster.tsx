import Image from "next/image";
import { HeroPosterWrapper } from "./styles/HeroPosterWrapper";
interface i {
    image : string
}
const HeroPoster = ({image}:i) => {
    return(
        <HeroPosterWrapper>
            <Image
                alt='Radosław Adamczyk - RadWEB - poster'
                layout="fill"  
                objectFit='cover'
                objectPosition='center'
                src={image}
            />
        </HeroPosterWrapper>
    )
}
export default HeroPoster;