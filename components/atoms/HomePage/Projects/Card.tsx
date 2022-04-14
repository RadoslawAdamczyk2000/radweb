import Image from "next/image";
import Link from "next/link"
import Button from "../../AllPages/Button";
import {CardWrapper} from './styles/CardWrapper';
interface i {
    button : string,
    content : string,
    path : string,
    title : string
}
const Card = ({button,content,path,title}:i) => {
    return(
        <CardWrapper>
            <div>
                <Link href={path}>
                    <a>
                        <h5>{title}</h5>
                    </a>
                </Link>
                <p>{content.substr(0,127)}...</p>
                <Button
                    isPage={true}
                    isSecondary={false}
                    isSection={false}
                    path={path}
                    title={button}
                />
            </div>
        </CardWrapper>
    )   
}
export default Card;