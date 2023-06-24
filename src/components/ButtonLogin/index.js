import Handlebars from "handlebars";
import { template } from "./buttonlogin.tmpl";


export const ButtonLogin = (form,text, extra_style, name) => Handlebars.compile(template)({form:form, name:name,text:text, 
    extra_style:extra_style})