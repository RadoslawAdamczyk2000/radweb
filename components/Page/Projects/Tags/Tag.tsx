import { useState } from "react";
import { IntTagStack } from "../../../../types/interface";
import { TagWrapper } from "./styles";
const Tag = ({icon,handle,title}:IntTagStack) => {
    const [active,setActive] = useState(false);
    console.log(handle)
    const handleClick = () => {
        setActive(!active);
        {
            !active ?
            (
                handle.push(title)
            ):
            (
                handle.filter((e:any) => e.title)
            )
        }
    }
    return(
        <TagWrapper 
            active={active} 
            onClick={handleClick}
            title={title} 
        >
            {icon}
        </TagWrapper>
    )
}
export default Tag;