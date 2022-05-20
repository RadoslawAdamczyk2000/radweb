import Link from "next/link"
import { IntButtonLocation } from "../../../../../types/interface";
import { ButtonWrapper } from "./styles";
const Button = ({path,primary}:IntButtonLocation) => {
    return(
        <ButtonWrapper className={`${primary ? 'primary' : 'secondary'}`}>
            <Link href={path}>
                <a rel='index follow'>
                    {
                        primary ?
                        'Dowiedz się więcej' :
                        'Sprawdź jak wygląda realizacja'
                    }
                </a>
            </Link>
        </ButtonWrapper>
    )
}
export default Button;