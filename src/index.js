import { Err5 } from './pages/Err5';
import { Err4 } from './pages/Err4';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { PasswordChange } from './pages/PasswordChange';
import { Profile } from './pages/Profile';
import { ProfileSettings } from './pages/ProfileSettings';
import { Registration } from './pages/Registration';

// import login from './pages/Login/login.tmpl' 
// import Handlebars from 'handlebars';

 

 
document.addEventListener('DOMContentLoaded', () => {

  const root = document.querySelector('#app');


  root.innerHTML = '';


  function getPage() {
    switch(window.location.pathname) {
      case '/':
        return (window.location.pathname = '/login');
      case '/login':
        return Login();
      case '/registration':
        return Registration();
      case '/chats':
        return Main();
      case '/settings':
        return ProfileSettings();
      case '/passwordchange':
        return PasswordChange();
      case '/profile':
        return Profile();
      case '/404':
        return Err4();
      case '/500':
        return Err5();
    }
  }
  
  root.innerHTML = getPage()
})
