import { IntSources } from "../../types/interface";
import { TypeSource } from "../../types/types";
const Sources = ({sources}:IntSources) => {
    return(
        <ul>
            {sources.map(({source}:TypeSource,key) =>
                <li key={key}>
                    <a 
                        href={source} 
                        title={source} 
                        target='_blank'
                        rel='noreferrer noopener noindex nofollow'
                    >
                        {source}
                    </a>
                </li>
            )}
        </ul>
    )
}
export default Sources;