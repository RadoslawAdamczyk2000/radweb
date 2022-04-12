import { ReactElement } from "react";
import { StackWrapper } from "./Post";
interface i{
    stacks : ReactElement[]
}
const Stack = ({stacks}:i) => <StackWrapper>{stacks.map((stack:ReactElement|any,key) => <li key={key}>{stack}</li>)}</StackWrapper>
export default Stack;
