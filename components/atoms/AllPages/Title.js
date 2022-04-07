import { TitleWrapper } from "./styles/TitleWrapper";

// interface i {
//     isPage ?: boolean,
//     title : string,
// }
const Title = ({isPage=false,title}) => {
    return(
        <>
            {
                isPage &&
                <TitleWrapper isPage={true}>{title}</TitleWrapper>
            }
        </>
    )
}
export default Title;