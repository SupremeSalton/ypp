import './style.scss'
export const template = `
<div class="chat__snippet">
    <div class="chat__snippet-avatar">
        <span class="chat__snippet-avatar-img"> {{initials}} </span> 
    </div>

    {{#if status}}   

        <div class="chat__snippet__text">
            <div class="chat__snippet__text-content">
                <span class="chat__snippet__text-content-name"> {{name}} </span>
                <span class="chat__snippet__text-content-message"> {{message}} </span>
            </div>

                                       
            <div class="chat__snippet__text-unread"> 
                <span> {{unreadMessages}} </span>
            </div>
        </div>

    {{else}}
        <div class="chat__snippet__text">
            <div class="chat__snippet__text-content">
              <span class="chat__snippet__text-content-name"> {{name}} </span>
             </div>

                                
            <div class="chat__snippet__text-allreaded"> 
                  <span> </span>
            </div>
         </div>
    {{/if}}

</div>
<hr class="chat__snippet-bottomLine"></hr>
`    