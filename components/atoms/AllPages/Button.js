import Link from "next/link";
import { ButtonWrapper } from "./styles/ButtonWrapper";
import {VscArrowRight} from  'react-icons/vsc';
// interface i {
//     isPage : boolean,
//     isSecondary : boolean,
//     isSection : boolean,
//     path : string | any,
//     title : string
// }
const Button = ({isPage,isSecondary,isSection,path,title}) => {
    return(
        <>
            {
                isPage &&
                <Link href={path}>
                    <ButtonWrapper secondary={isSecondary} page={isPage}>
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
                    <button>
                      <i>
                        <VscArrowRight/>
                      </i>
                    </button>
                  </ButtonWrapper>
                </Link>
            }   
        </>
    )
}
export default Button;