import Link from "next/link"
import { intLangItem } from "./interface";
import { LangItemWrapper } from "./styles";
const LangItem = ({lang,path,title}:intLangItem) => {
    return(
        <LangItemWrapper title={`${lang} - ${title}`}>
            <Link href={path}>
                <a title={`${lang} - ${title}`}>
                    {title}
                </a>
            </Link>
        </LangItemWrapper>
    )
}
export default LangItem;