import { IntContentPage } from "./interface"
import { ContentHomeWrapper } from "./styles"
export const ContentHome = ({content,isCenter,isPrimary,isSecondary,isTertiary}:IntContentPage) => {
    return(
        <ContentHomeWrapper
            dangerouslySetInnerHTML={{__html:content}}
            center={isCenter}
            primary={isPrimary}
            secondary={isSecondary}
            tertiary={isTertiary}
        />
    )
}