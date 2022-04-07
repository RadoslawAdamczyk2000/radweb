import { ButtonWrapper } from './styles/ButtonWrapper';
import {VscAdd} from 'react-icons/vsc'
interface i {
    openForm : any,
}
const Button = ({openForm}:i) => <ButtonWrapper onClick={openForm} whileTap={{scale:.8}}><VscAdd/></ButtonWrapper>
export default Button;