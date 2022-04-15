import {RiArrowRightLine} from 'react-icons/ri';
import { ButtonWrapper } from './styles/ButtonWrapper';
const Button = ({title}:{title:string}) => {
    return(
        <ButtonWrapper type='submit'>
            <p>{title}</p>
            <div>
                <i>
                    <RiArrowRightLine/>
                </i>
            </div>
        </ButtonWrapper>
    )
}
export default Button;