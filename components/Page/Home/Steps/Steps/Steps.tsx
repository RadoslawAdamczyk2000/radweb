import { steps } from "../../../../../data/steps"
import Step from "../Step/Step"
import { StepsWrapper } from "./styles";

const Steps = () => {
    return(
        <StepsWrapper>
            <ul>
                {steps.map(({content,title},key) => 
                    <Step
                        content={content}
                        key={key}
                        number={key + 1}
                        title={title}
                    />    
                )}
                
            </ul>
        </StepsWrapper>
    )
}
export default Steps;