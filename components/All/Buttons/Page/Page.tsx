import Link from "next/link"
import { IntButton } from "./interface"
import { Primary, Secondary } from "./styles"

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

export const SecondaryButton = ({button,path}:IntButton) => {
    return(
        <Secondary>
            <Link href={path}>
                <a>
                    {button}
                </a>
            </Link>
        </Secondary>
    )
}
export const TertiaryButton = ({button,path}:IntButton) => {
    return(
        <div>
            <Link href={path}>
                <a>
                    {button}
                </a>
            </Link>
        </div>
    )
}