import './style.scss'
export const template = `
<nav class="chat__navbar">
    <button class="chat__navbar__addbutton"> </button>
    <input type="text" class="chat__navbar-search" placeholder="Search Chat"> </input>
    <span class="chat__navbar-avatar"> {{initials}} </span> 
    <span class="chat__navbar-name">{{text}}</span>
    <button class="chat__navbar-profileButton">Profile</button>
</nav>
`