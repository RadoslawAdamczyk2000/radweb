import { home } from "../../../../content/pages/home";
import Button from "../../AllPages/Button";
import { ButtonsWrapper } from "./styles/ButtonsWrapper";
const Buttons = () => {
      const {hero} = home.pl;
    return(
        <ButtonsWrapper>
            {
                hero.buttons.map(({path,title}) =>
                    <Button
                        isPage={true}
                        isSecondary={false}
                        isSection={false}
                        path={path}
                        title={title}
                    />  
                )
            }
        </ButtonsWrapper>
    )
}
export default Buttons;