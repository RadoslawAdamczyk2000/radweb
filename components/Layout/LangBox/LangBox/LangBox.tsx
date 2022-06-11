import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { VscClose } from "react-icons/vsc"
import { Context, Provider } from "../../../../context/LangContext";
import LangItem from "../LangItem/LangItem";
import { LangBoxWrapper } from "./styles";

const LangBox = () => {
    const {close,isOpen} = useContext(Context);
    const handle = () => {
        close();
        console.log('close');
    }
    return( 
        <>
            {
                isOpen &&
                <AnimatePresence>
                    <LangBoxWrapper
                        initial={{opacity:0,y:150,visibility:'hidden'}}
                        animate={{opacity:1,y:0,visibility:'visible'}}
                        exit={{opacity:0,y:-50,visibility:'hidden'}}
                    >
                        <div>
                            <div className="button" onClick={() => close()}>
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
                </AnimatePresence>
            }
        </>
    )
}
export default LangBox;