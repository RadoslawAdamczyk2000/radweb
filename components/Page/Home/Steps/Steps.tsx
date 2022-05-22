import { home } from "../../../../content/home";
import Step from "./Step";
import { StepsWrapper } from "./styles";
const Steps = () => {
    const {title,cards} = home.page.steps;
    return(
        <StepsWrapper id='etapy-realizacji'>
            <article>
                <h2>{title}</h2>
            </article>
            <ul>
                {cards.map(({content,index,title},key) =>
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