import { IntButton } from "./interface";
import { ButtonWrapper } from "./styles";
const Button = ({handle}:IntButton) => {
    return(
        <ButtonWrapper onClick={handle}>
            <span/>
            <span/>
        </ButtonWrapper>
    )
}
export default Button;