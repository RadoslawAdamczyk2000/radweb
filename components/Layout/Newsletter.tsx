import { useRef } from 'react';
import {footer} from '../../data/footer';
import { NewsletterWrapper } from './styles';
import emailjs from '@emailjs/browser';
const Newsletter = () => {
    const {title,content,button,form} = footer.pl.newsletter;
    const formRef = useRef<null | HTMLFormElement>(null);
    const handleSubmit = async () => {
       if(formRef.current){emailjs.sendForm('newsletter','newsletter',formRef.current,'jiBzcCuVYQCjwhBEu')};
       window?.location.replace('https://rad-web.vercel.app/newsletter');
    }
    return(
        <NewsletterWrapper>
            <section>
                <h4>{title}</h4>
                <p>{content}</p>
            </section>
            <form
                autoComplete='off'
                onSubmit={handleSubmit}
                method="POST"
                ref={formRef}
            >
                <div>
                    <div className='field'>
                        <label htmlFor={form.firstName.inputId}>
                            {form.firstName.label}
                        </label>
                        <div>
                            <input
                                id={form.firstName.inputId}
                                name={form.firstName.inputName}
                                placeholder={form.firstName.label}
                                type='text'
                                required
                            />
                            <span/>
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor={form.eMail.inputId}>
                            {form.eMail.label}
                        </label>
                        <div>
                            <input
                                id={form.eMail.inputId}
                                name={form.eMail.inputName}
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                                placeholder={form.eMail.label}
                                type='email'
                                required
                            />
                            <span/>
                        </div>
                    </div>
                </div>
                <button type='submit'>
                    {button}
                </button>
            </form>
        </NewsletterWrapper>
    )
}
export default Newsletter;