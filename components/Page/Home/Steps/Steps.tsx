import { steps } from "../../../../data/steps";
import Step from "./Step";
import { StepsWrapper } from "./styles";

const Steps = () => {
    return(
        <StepsWrapper>
            <article>
                <h2>Proces realizacji zamówień</h2>
            </article>
            <ul>
                {steps.map(({content,index,title},key) =>
                    <Step
                        content={content}
                        index={index}
                        key={key}
                        title={title}
                    />
                )}
            </ul>
        </StepsWrapper>
    )
}
export default Steps; 