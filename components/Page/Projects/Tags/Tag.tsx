import { IntTagStack } from "../../../../types/interface";
const Tag = ({icon,title}:IntTagStack) => {
    return(
        <li title={title}>
            <span title={title}>
                {icon}
            </span>
        </li>
    )
}
export default Tag;