import { TagsWrapper } from "./Post";
interface i {
    tags : string[]
}
const Tags = ({tags}:i) => <TagsWrapper>{tags.map((tag:string,key) => <li key={key}>{tag}</li>)}</TagsWrapper>
export default Tags;