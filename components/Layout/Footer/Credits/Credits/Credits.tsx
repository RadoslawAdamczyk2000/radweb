import Credit from "../Credit/Credit";
import Production from "../Production/Production";
import { CreditsWrapper } from "./styles";
const Credits = () => {
    return(
        <CreditsWrapper>
            <ul>
                <Credit
                    path="#"
                    title="Polityka prywatności"
                />
                <span/>
                <Credit
                    path="#"
                    title="Polityka Cookie"
                />
                <span/>
            </ul>
            <Production/>
        </CreditsWrapper>
    )
}
export default Credits;