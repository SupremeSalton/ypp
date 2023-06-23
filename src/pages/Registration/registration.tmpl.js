import './style.scss'
export const template = `
    <main class="main__background ">
        <div class="profile__avatar">
        </div>
        <form class="login__form">
            <h1 class="login__form-header">Registration</h1>
            {{{email}}}
            {{{login}}}
            {{{name}}} 
            {{{lastname}}}
            {{{phone}}}
            {{{singup}}}
            {{{cancel}}}
    </form>
</main>
`