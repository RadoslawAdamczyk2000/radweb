import Link from "next/link"
import { IntPartner } from "./interface";
import { PartnerWrapper } from "./styles";
const Partner = ({path,title}:IntPartner) => {
    return(
        <PartnerWrapper>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </PartnerWrapper>
    )
}
export default Partner;