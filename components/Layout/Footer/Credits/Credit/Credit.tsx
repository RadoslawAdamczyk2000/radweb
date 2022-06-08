import Link from "next/link"
import { IntCredit } from "./interface"
import { CreditWrapper } from "./styles";

const Credit = ({path,title}:IntCredit) => {
    return(
        <CreditWrapper title={title}>
            <Link href={path}>
                <a title={title}>
                    {title}
                </a>
            </Link>
        </CreditWrapper>
    )
}
export default Credit;