import Handlebars from 'handlebars';

import { template } from './profile.tmpl';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';


export const ProfileSettings = () => Handlebars.compile(template)({
    email: Input('Your email', 'Email', 'email'),
    login: Input('Your login', 'Login', 'login'),
    name: Input('Your name', 'Name', 'first_name'),
    lastname: Input('Your lastname', 'Lastname', 'second_name'),
    displayname: Input('Your display name', 'Name in chat', 'display_name'),
    phone: Input('Your phone', 'Phone', 'phone'),
    singup: ButtonLogin('login__form','Accept', 'form__button-singin', 'accept'),
    password: Input('Set password', 'Password', 'password'),
    password: Input('Repeat password', 'Password', 'password'),                                             
    cancel: ButtonLogin(undefined, 'Cancel', 'form__singup-cancel', 'cancel'),
    change_pass: ButtonLogin(undefined, 'Change Password', 'form__button-singup', 'change_password')
})



{/* <div class="profile__settings-pic">
            <label class="-label" for="file">
                <span class="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
            </label>
            <input id="file" type="file" name=""/>
            <img src="../../images/image.png" id="output" width="200" />
        </div>       */}
