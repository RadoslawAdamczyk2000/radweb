import { IntStep } from "./interface";
import { StepWrapper } from "./styles";

const Step = ({content,number,title}:IntStep) => {
    return(
        <StepWrapper>
            <div>
                <span>
                    {number < 10 ? `0${number}` : number}
                </span>
            </div>
            <section>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{__html:content}}/>
            </section>
        </StepWrapper>
    )
}
export default Step;