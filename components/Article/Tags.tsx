import { IntTags } from "../../types/interface";
import { TypeTag } from "../../types/types";
import { TagsWrapper } from "./styles";
const Tags = ({tech,tags}:IntTags) => {
    return(
        <TagsWrapper>
            {
                tech ?
                tags.map((tag:TypeTag,key:number) =>
                    <li className='tech' key={key}>{tag}</li>
                ):
                tags.map((tag:TypeTag,key:number) =>
                    <li className='tag' key={key}>{tag}</li>
                )
            }
        </TagsWrapper>
    )
}
export default Tags;