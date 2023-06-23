import './style.scss'
export const template = `
    <main class="chat">
        {{{navbar}}}
        <div class="chat__window">
             <div class="chat__window-list">
                 {{{snippet1}}}
                 {{{snippet2}}}
                 {{{snippet3}}}
                 {{{snippet4}}} 
             </div>
            <div class="chat__window__messages"> 
                <div class="chat_window__messages-up"> Choose chat </div>
                <div class="chat_window__messages-down"> {{{chatbar}}} </div>
            </div>
        </div>
        
    </main>
`