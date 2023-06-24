import Handlebars from "handlebars";
import { template } from "./infoline.tmpl";

export const InfoLine = (first, second) => Handlebars.compile(template)({
    first:first,
    second:second
})