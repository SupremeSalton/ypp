import Handlebars from "handlebars";
import { template } from "./err4.tmpl";
import { Err } from "../../components/Err";

export const Err4= () => Handlebars.compile(template)({
    err: Err("404","Oops...")
})