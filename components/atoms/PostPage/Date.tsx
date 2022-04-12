import { DateWrapper } from "./Post";
interface i {
    children : string | number,
}
const Date = ({children}:i) => <DateWrapper>{children}</DateWrapper>
export default Date;