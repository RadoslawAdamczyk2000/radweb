import { IntDate } from "../../types/interface";
import { DateWrapper } from "./styles";
const Date1 = ({children}:IntDate) => {
    return(
        <DateWrapper>
            <p>{children}</p>
        </DateWrapper>
    )
}
export default Date1;