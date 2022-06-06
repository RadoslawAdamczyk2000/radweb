import Link from "next/link"
import { IntSectionButton } from "./interface";
import { SectionButtonWrapper } from "./styles";
const SectionButton = ({path,title}:IntSectionButton) => {
    return(
        <SectionButtonWrapper>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </SectionButtonWrapper>
    )
}
export default SectionButton;