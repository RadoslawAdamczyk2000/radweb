import { tags } from "../../../../data/tags";
import Tag from "../../../atoms/BlogPage/Tags/Tag";
import { TagsWrapper } from "./styles/TagsWrapper";
const Tags = () => {
    return(
        <TagsWrapper>
            {tags.map(({name}) =>
                <Tag title={name} key={name}/>
            )}
        </TagsWrapper>
    )
}
export default Tags;