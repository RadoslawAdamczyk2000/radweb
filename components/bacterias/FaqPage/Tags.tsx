import Tag from "../../atoms/FaqPage/Tag";
import { TagsWrapper } from "./styles/TagsWrapper";
interface i {
    tags : Array<any>
}
const Tags = ({tags}:i) => {
    return(
        <TagsWrapper>
            {tags.map(({title}) => <Tag title={title} key={title}/>) }
        </TagsWrapper>
    )
}
export default Tags;