import Image from "next/image";
import Button from "../../AllPages/Button";
import { OfferCardWrapper } from "./styles/OfferCardWrapper";
interface i {
    button : string,
    children : any,
    image : string,
    path : string,
    title : string
}
const OfferCard = ({button,children,image,path,title}:i) => {
    return(
        <OfferCardWrapper>
            <figure>
                <Image 
                    alt={`${title} - image`}
                    layout='fill'
                    objectFit='cover'
                    src={image}
                />
            </figure>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
            <Button 
                isPage={false}
                isSecondary={false}
                isSection={true}
                path={path}
                title={button}
            />
        </OfferCardWrapper>
    )
}
export default OfferCard;