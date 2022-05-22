import { IntAlert } from "../../../../types/interface";
import { AlertWrapper } from "./styles";
import {BsCheckLg,BsExclamationLg} from 'react-icons/bs';
const Alert = ({answerCorrect,answerError,isCorrect}:IntAlert) => {
    return(
        <AlertWrapper className={`${isCorrect ? 'correct' : 'error'}`}>
            <span>
                {
                    isCorrect ? 
                    <BsCheckLg/> :
                    <BsExclamationLg/>
                }
            </span>
            <p>
                {
                    isCorrect ? 
                    answerCorrect :
                    answerError
                }
            </p>
        </AlertWrapper>
    )
}
export default Alert;