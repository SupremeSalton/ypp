import Handlebars from "handlebars";
import { template } from "./navbar.tmpl";

export const Navbar = (text,initials) => Handlebars.compile(template)({
    text:text,
    initials:initials
})