import { TagWrapper } from "./styles/TagWrapper";
interface i {
    title : string,
}
const Tag = ({title}:i) => {
    return(
        <TagWrapper>
            <button>
                {title}
            </button>
        </TagWrapper>
    )
}
export default Tag;