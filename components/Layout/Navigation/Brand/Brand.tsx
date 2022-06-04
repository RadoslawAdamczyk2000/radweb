import Link from "next/link"
import { BrandWrapper } from "./styles";
const Brand = () => {
    return(
        <BrandWrapper className="brand">
            <Link href='/'>
                <a>
                    RadWEB
                </a>
            </Link>
        </BrandWrapper>
    )
}
export default Brand;