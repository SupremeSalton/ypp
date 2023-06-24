import Handlebars from 'handlebars';

import { template } from './main.tmpl';
import { ChatSnippet } from '../../components/ChatSnippet';
import { Navbar } from '../../components/Navbar';
import { ChatBar } from '../../components/ChatBar';

export const Main = () => Handlebars.compile(template)({
    navbar: Navbar("Arthur Belic","A.B"),
    snippet1: ChatSnippet("A.B", "Arthur Belic", "test", 0, "12"),
    snippet2: ChatSnippet("B.B", "Big Boss", "What is up?", 1, "12"),
    snippet3: ChatSnippet("S.A", "Sam Alvey", "test", 0, "12"),
    snippet4: ChatSnippet("J.J", "Jon Jones", "Do you have my belt?", 1, "3"),
    chatbar: ChatBar()
})