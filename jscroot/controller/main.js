//lib call
import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
//internal call
import { url } from "../url/config.js";
import { getContentURL,getURLContentJS } from "../url/content.js";
import { showMenu,activeLink } from "./navbar.js";


export function runAfterHashChange(evt){
    insertHTML(getContentURL(),"content",runAfterContent);
}

export function runAfterHeader(){
    insertHTML(url.template.navbar,"navbar",runAfterNavbar);
}

function runAfterNavbar(){
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
    activeLink('.nav__dropdown-item');
}

export async function runAfterContent(){
    let urljs = getURLContentJS();
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}