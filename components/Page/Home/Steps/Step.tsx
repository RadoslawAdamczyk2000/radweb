import { IntStepHome } from "../../../../types/interface";
import { StepWrapper } from "./styles";
const Step = ({content,index,title}:IntStepHome) => {
    return(
        <StepWrapper>
            <div>
                <p>{index}</p>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </StepWrapper>
    )
}
export default Step;