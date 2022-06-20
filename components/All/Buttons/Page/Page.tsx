import Link from "next/link"
import { IntButton } from "./interface"
import { Primary } from "./styles"

export const PrimaryButton = ({button,path}:IntButton) => {
    return(
        <Primary>
            <Link href={path}>
                <a>
                    {button}
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </a>
            </Link>
        </Primary>
    )
}

export const SecondaryButton = () => {
    return(
        
    )
}
export const TertiaryButton = () => {
    return(

    )
}