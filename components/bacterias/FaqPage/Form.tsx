import Input from '../../atoms/FaqPage/Input';
import Submit from '../../atoms/FaqPage/Submit';
import {VscClose} from 'react-icons/vsc'
import { faq } from '../../../content/pages/faq';
import { FormWrapper } from './styles/FormWrapper';
interface i {
    closeForm : any,
    openForm : any
}
const Form = ({closeForm,openForm}:i) => {
    const {button,email,firstName,message} = faq.pl.form;
    return(
        <FormWrapper onClick={closeForm}>
            <div className='box' onClick={openForm}>
                <div className='close'>
                    <button onClick={closeForm}>
                        <VscClose/>
                    </button>
                </div>
                <form action="" className='form'>
                    <Input 
                        inputId={firstName.inputId} 
                        inputName={firstName.inputName} 
                        title={`${firstName.title}: `}
                    />
                    <Input 
                        inputId={email.inputId} 
                        inputName={email.inputName} 
                        isMail={true} 
                        title={`${email.title}: `}
                    />
                    <Input 
                        inputId={message.inputId} 
                        inputName={message.inputName} 
                        title={`${message.title}: `} 
                    />
                    <Submit title={button.title}/>
                </form>
            </div>
        </FormWrapper>
    )
}
export default Form;