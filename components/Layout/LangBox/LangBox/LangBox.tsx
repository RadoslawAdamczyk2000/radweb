import { useContext } from "react";
import { VscClose } from "react-icons/vsc"
import { Context, Provider } from "../../../../context/LangContext";
import LangItem from "../LangItem/LangItem";
import { LangBoxWrapper } from "./styles";

const LangBox = () => {
    const {close} = useContext(Context);
    return(
        <Provider>
            <LangBoxWrapper>
                <div>
                    <div className="button" onClick={close}>
                        <VscClose/>
                    </div>
                </div>
                <div>
                    <ul>
                        <LangItem
                            lang="pl"
                            path=""
                            title="Polski"
                        />
                        <LangItem
                            lang="en"
                            path=""
                            title="English"
                        />
                        <LangItem
                            lang="es"
                            path=""
                            title="Español"
                        />
                        <LangItem
                            lang="de"
                            path=""
                            title="Deutsch"
                        />
                    </ul>
                </div>
            </LangBoxWrapper>
        </Provider>
    )
}
export default LangBox;