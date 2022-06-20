import { IntTitle } from "./interface"
import { TitleWrapper } from "./styles"
export const Title = ({isPrimary=false,isSecondary=false,title}:IntTitle) => {
    return(
        <TitleWrapper 
            dangerouslySetInnerHTML={{__html:title}}
            primary={isPrimary}
            secondary={isSecondary}
        />
    )
}