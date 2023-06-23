import './style.scss'
export const template = `
<main class="main__background ">
    <div class="profile__settings__form">

        <div class="profile__settings__avatar">
            <div class="profile__settings__avatar-img"> </div>
            <input class="profile__settings__avatar-file" type="file" name="avatar"> </input>
            {{{change_pass}}}
        </div>

        <form class="profile__settings__form-text">
            <h1 class="login__form-header">Profile Settings</h1>
            {{{email}}}
            {{{login}}}
            {{{name}}} 
            {{{lastname}}}
            {{{phone}}}
            {{{displayname}}}
            {{{password1}}}
            {{{password2}}}
            {{{singup}}}
            {{{cancel}}}
        </form>
    </div>
</main>
`

