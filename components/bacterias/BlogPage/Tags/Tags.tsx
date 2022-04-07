import Tag from "../../../atoms/BlogPage/Tags/Tag";
import { TagsWrapper } from "./styles/TagsWrapper";
const Tags = () => {
    return(
        <TagsWrapper>
            <Tag title="programowanie"/>
            <Tag title="seo"/>
            <Tag title="historia"/>
            <Tag title="administracja"/>
            <Tag title="podróże"/>
            <Tag title="recenzje"/>
        </TagsWrapper>
    )
}
export default Tags;