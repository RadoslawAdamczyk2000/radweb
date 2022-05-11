import { IntStackItemHome } from "../../../../types/interface";
import { StackItemWrapper } from "./styles";
const StackItem = ({icon,title}:IntStackItemHome) => {
    return(
        <StackItemWrapper title={title}>
            {icon}
        </StackItemWrapper>
    )
}
export default StackItem;