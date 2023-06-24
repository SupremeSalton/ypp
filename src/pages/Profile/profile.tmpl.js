import "../Registration/style.scss"
import "./style.scss"
export const template =  `
    <main class="main__background">
        <form class="login__form">
            <h1 class="login__form-header">Profile</h1>
            <div class="profile__form-avatar"> </div>
                <ul>
                    {{{email}}}
                    {{{login}}}
                    {{{name}}}
                    {{{last_name}}}
                    {{{chat_name}}}
                    {{{phone}}}
                </ul>
                {{{settings}}}
                {{{back}}}
        </form>
    </main>
`