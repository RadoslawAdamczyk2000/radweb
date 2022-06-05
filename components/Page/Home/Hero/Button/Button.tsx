import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';
import { IntButton } from './interface';
import { ButtonWrapper } from './styles';
const Button = ({handle,isLeft=false,isRight=false}:IntButton) => {
    return(
        <>
            {
                isLeft &&
                <ButtonWrapper 
                    onClick={handle}
                    className='left'
                >
                    <FiChevronsLeft/>
                </ButtonWrapper>
            }
            {
                isRight &&
                <ButtonWrapper 
                    onClick={handle}
                    className='right'
                >
                    <FiChevronsRight/>
                </ButtonWrapper>
            }
        </>
        
    )
}
export default Button;