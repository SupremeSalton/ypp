import Handlebars from "handlebars";
import { template } from "./err.tmpl";

export const Err = (errNumber, text) => Handlebars.compile(template)({
    errNumber:errNumber,
    text:text
})