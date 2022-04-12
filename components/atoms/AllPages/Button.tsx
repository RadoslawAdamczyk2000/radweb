import Link from "next/link";
import { ButtonWrapper } from "./styles/ButtonWrapper";
import {VscArrowRight} from  'react-icons/vsc';
interface i {
    isPage : boolean,
    isSecondary : boolean,
    isSection : boolean,
    path : string,
    title : string
}
const Button = ({isPage,isSecondary,isSection,path,title}:i) => {
    return(
        <>
            {
                isPage &&
                <Link href={path}>
                    <ButtonWrapper page={isPage}>
                        {title}
                    </ButtonWrapper>
                </Link>
            } 
            {
                isSection &&
                <Link href={path}>
                  <ButtonWrapper section={isSection}>
                    <p>
                      {title}
                    </p>
                    <div>
                      <i>
                        <VscArrowRight/>
                      </i>
                    </div>
                  </ButtonWrapper>
                </Link>
            }   
        </>
    )
}
export default Button;