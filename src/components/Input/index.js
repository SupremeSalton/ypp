import Handlebars from "handlebars";
import { template } from "./input.tmpl";

export const Input = (upperText, pholder, name) => Handlebars.compile(template)({
    upperText:upperText,
    pholder:pholder, 
    name:name
})