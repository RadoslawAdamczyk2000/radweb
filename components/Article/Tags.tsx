import { ReactElement } from "react"
import { IntTags } from "../../types/interface";
import { TypeTag } from "../../types/types";
const Tags = ({tech,tags}:IntTags) => {
    return(
        <ul>
            {
                tech ?
                tags.map((tag:TypeTag,key:number) =>
                    <li className='tech' key={key}>{tag}</li>
                ):
                tags.map((tag:TypeTag,key:number) =>
                    <li className='tag' key={key}>{tag}</li>
                )
            }
        </ul>
    )
}
export default Tags;