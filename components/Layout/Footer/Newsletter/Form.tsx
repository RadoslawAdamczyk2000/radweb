import Button from "./Button";
import Field from "./Field"

const Form = () => {
    return(
        <form>
            <Field
                id='firstname'
                min={3}
                name='firstname'
                pattern=''
                title='Imię'
                type='text'
            />
            <Field
                id='email'
                min={5}
                name='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                title='E-mail'
                type='email'
            />
            <Button/>
        </form>
    )
}
export default Form;