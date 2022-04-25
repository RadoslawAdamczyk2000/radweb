import { IntTitleArticle } from "../../types/interface";
import { TitleWrapper } from "./styles";
const Title1 = ({isH2,isH3,isH4,main,title}:IntTitleArticle) => {
    return(
        <>
            {
                main &&
                <TitleWrapper as='h1' className='title'>{title}</TitleWrapper>
            }
            {
                isH2 && 
                <TitleWrapper as='h2' className='other'>{title}</TitleWrapper>
            }
            {
                isH3 &&
                <TitleWrapper as='h3' className='other'>{title}</TitleWrapper>
            }
            {
                isH4 &&
                <TitleWrapper as='h4' className='other'>{title}</TitleWrapper>
            }
        </>
    )
}
export default Title1;