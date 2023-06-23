import Handlebars from 'handlebars';

import { template } from './registration.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';


export const Registration = () => Handlebars.compile(template)({
    email: Input('Your email', 'Email', 'email'),
    login: Input('Your login', 'Login', 'login'),
    name: Input('Your name', 'Name', 'first_name'),
    lastname: Input('Your lastname', 'Lastname', 'second_name'),
    phone: Input('Your phone', 'Phone', 'phone'),
    password: Input('Set password', 'Password', 'password'),
    password: Input('Repeat password', 'Password', 'password'),
    singup: ButtonLogin('login__form','Sign up', 'form__button-singin', 'sign up'),                                              
    cancel: ButtonLogin(undefined, 'Cancel', 'form__singup-cancel', 'cancel')  
})