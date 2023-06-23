import Handlebars from 'handlebars';

import { template } from './profile.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';
import { InfoLine } from '../../components/InfoLine';

export const Profile = () => Handlebars.compile(template)({
    email: InfoLine('email', 'whowannastopme@hotmail.com'),                          
    login: InfoLine('login','Lemon'),
    name: InfoLine('name', 'Arthur'), 
    last_name: InfoLine('Last Name', 'Belic'), 
    chat_name: InfoLine('Name in Chat', 'Nicolas Cage'), 
    phone       : InfoLine('phone', '+14342156432'),                 
    settings: ButtonLogin(undefined,'Settings', 'form__button-singup', 'settings'),                         
    back: ButtonLogin(undefined, 'Back', 'form__singup-cancel', 'back')                          
})                          