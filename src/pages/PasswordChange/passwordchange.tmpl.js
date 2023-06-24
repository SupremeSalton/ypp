import "../Registration/style.scss"
export const template =  `
    <main class="main__background">
        <form class="login__form">
            <h1 class="login__form-header">Change your password</h1>
            {{{oldpass}}}
            {{{newpass}}}
            {{{accept}}}
            {{{cancel}}}
        </form>
    </main>
`