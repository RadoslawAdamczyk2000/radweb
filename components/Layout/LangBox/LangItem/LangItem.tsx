import Link from "next/link"
import { useContext } from "react";
import { Context } from "../../../../context/LangContext";
import { intLangItem } from "./interface";
import { LangItemWrapper } from "./styles";
const LangItem = ({lang,path,title}:intLangItem) => {
    const {close} = useContext(Context);
    return(
        <LangItemWrapper title={`${lang} - ${title}`}>
            <Link href={path} locale={lang}>
                <a title={`${lang} - ${title}`} onClick={() => close()}>
                    {title}
                </a>
            </Link>
        </LangItemWrapper>
    )
}
export default LangItem;