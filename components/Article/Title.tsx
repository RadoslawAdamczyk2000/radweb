import { IntTitleArticle } from "../../types/interface";
const Title = ({isH2,isH3,isH4,main,title}:IntTitleArticle) => {
    return(
        <>
            {
                main &&
                <h1>{title}</h1>
            }
            {
                isH2 && 
                <h2>{title}</h2>
            }
            {
                isH3 &&
                <h3>{title}</h3>
            }
            {
                isH4 &&
                <h4>{title}</h4>
            }
        </>
    )
}
export default Title;