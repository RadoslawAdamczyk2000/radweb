import Content from "../../../atoms/HomePage/WhyMe/Content"
import Poster from "../../../atoms/HomePage/WhyMe/Poster"
import { WhyMeWrapper } from "./styles/WhyMeWrapper";
const WhyMe = () => {
    return(
        <WhyMeWrapper>
            <Poster/>
            <Content/>
        </WhyMeWrapper>
    )
}
export default WhyMe;