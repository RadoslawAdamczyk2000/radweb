import Link from "next/link"
import { intLangItem } from "./interface";
const LangItem = ({lang,path,title}:intLangItem) => {
    return(
        <li title={`${lang} - ${title}`}>
            <Link href={path}>
                <a title={`${lang} - ${title}`}>
                    {title}
                </a>
            </Link>
        </li>
    )
}
export default LangItem;