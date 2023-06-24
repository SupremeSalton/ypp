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

        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/login"> Login (/login)</a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/registration"> Registration (/registration) </a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/chats"> Chats (/chats) </a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/profile"> Profile (/profile) </a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/settings"> Settings (/settings) </a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/passwordchange"> Change Password (/passwordchange) </a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/404"> 404 (/404)</a></li>
        <li> <a href="https://dreamy-chaja-f6b77c.netlify.app/500"> 500 (/500)</a></li>

    </ul>
`