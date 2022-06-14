import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import { LangWrapper } from "./styles";
const Lang = () => {
    return(
        <LangWrapper>
            <div>
                <Button
                    handle={() => console.log('close')}
                />
            </div>
            <div>
                <Menu/>
            </div>
        </LangWrapper>
    )
}
export default Lang;