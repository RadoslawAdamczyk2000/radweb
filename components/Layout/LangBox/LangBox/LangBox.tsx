import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { VscClose } from "react-icons/vsc"
import { Context } from "../../../../context/LangContext";
import LangItem from "../LangItem/LangItem";
import { LangBoxWrapper } from "./styles";
const LangBox = () => {
    const {locales} = useRouter();
    const {close,isOpen} = useContext(Context);
    const checkLang = (lang:string) => {
        if(lang == 'pl'){
            return 'Polski';
        } 

        if(lang == 'en'){
            return 'English';
        }
        if(lang == 'es'){
            return 'Español';
        }
        if(lang == 'de'){
            return 'Deutsch';
        }
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
                                {locales !== undefined && locales.map((index,key) =>
                                    <LangItem
                                        key={key}
                                        lang={index}
                                        path="/"
                                        title={checkLang(index)}
                                    />
                                )}
                            </ul>
                        </div>
                    </LangBoxWrapper>
                </AnimatePresence>
            }
        </>
    )
}
export default LangBox;