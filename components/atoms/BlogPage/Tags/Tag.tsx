import { TagWrapper } from "./styles/TagWrapper";
interface i {
    title : string
}
const Tag = ({title}:i) => <TagWrapper><p>{title}</p></TagWrapper>;
export default Tag;