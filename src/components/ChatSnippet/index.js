import Handlebars from "handlebars";
import { template } from "./chatsnippet.tmpl";

export const ChatSnippet = (initials, name, message, status, unreadMessages) => Handlebars.compile(template)({
        initials:initials,
        status: status,
        unreadMessages: unreadMessages,
        name:name,
        message:message
})