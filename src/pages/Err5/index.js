import Handlebars from "handlebars";
import { template } from "./err5.tmpl";
import { Err } from "../../components/Err";
import '../Err4/style.scss'

export const Err5 = () => Handlebars.compile(template)({
    err: Err("500","Under Maintenance")
})