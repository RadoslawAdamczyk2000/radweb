import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import { LangWrapper } from "./styles";
const Lang = () => {
    const {isOpen,close} = useContext(LangContext);
    return(
        <>
            {
                isOpen &&
                <AnimatePresence>
                    <LangWrapper
                        initial={{opacity:0,visibility:'hidden',y:50}}
                        animate={{opacity:1,visibility:'visible',y:0}}
                        exit={{opacity:0,visibility:'hidden',y:-50}}
                    >
                        <div>
                            <Button
                                handle={() => close()}
                            />
                        </div>
                        <div>
                            <Menu/>
                        </div>
                    </LangWrapper>
                </AnimatePresence>
            }
        </>
    )
}
export default Lang;