import "../Registration/style.scss"
export const template =  `
    <main class="main__background">
        <form class="login__form">
            <h1 class="login__form-header">LOGIN</h1>
            {{{login}}}
            {{{password}}}
            {{{singin}}}
            {{{singup}}}
        </form>
    </main>

    <ul class="link_list">
        <li> <a href="http://localhost:3000/login"> Login </a></li>
        <li> <a href="http://localhost:3000/registration"> Registration </a></li>
        <li> <a href="http://localhost:3000/chats"> Chats </a></li>
        <li> <a href="http://localhost:3000/profile"> Profile </a></li>
        <li> <a href="http://localhost:3000/settings"> Settings </a></li>
        <li> <a href="http://localhost:3000/passwordchange"> Change Password </a></li>
        <li> <a href="http://localhost:3000/404"> 404 </a></li>
        <li> <a href="http://localhost:3000/500"> 500 </a></li>
    </ul>
`