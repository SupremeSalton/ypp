import Handlebars from 'handlebars';

import { template } from './passwordchange.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';

export const PasswordChange = () => Handlebars.compile(template)({
    oldpass: Input('Enter your old password', 'Old_Password', 'oldPassword'),                          //oldPASS
    newpass: Input('Enter your new password','New_Password', 'newPassword'),                           //newPASS
    accept: ButtonLogin('login__form','OK', 'form__button-login', 'Sign in'),                          //OK
    cancel: ButtonLogin(undefined, 'Cancel', 'form__singup-cancel', 'cancel')                          //Cancel
})                          