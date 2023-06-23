import Handlebars from 'handlebars';

import { template } from './login.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';

export const Login = () => Handlebars.compile(template)({
    login: Input('Enter your login', 'login', 'login'),                                                  //LOGIN
    password: Input('Enter your password','password', 'password'),                                       //PASSWORD
    singin: ButtonLogin('login__form','Sign in', 'form__button-login', 'Sign in'),                       //SING-IN button
    singup: ButtonLogin(undefined, 'Sign up', 'form__button-singup', 'Sign up')                          //SING-UP button
})                          