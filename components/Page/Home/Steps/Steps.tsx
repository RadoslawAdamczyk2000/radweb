import { steps } from "../../../../data/steps";
import Step from "./Step";

const Steps = () => {
    return(
        <section>
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
        </section>
    )
}
export default Steps; 