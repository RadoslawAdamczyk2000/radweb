import { ResultWrapper } from "./styles";

const Result = ({search}:{search:string}) => {
    return(
        <ResultWrapper>
            <p>„{search}”</p>
        </ResultWrapper>
    )
}
export default Result;