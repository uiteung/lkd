//lib call
import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
//internal call
import { url,id } from "./url/config.js";
import { getContentURL } from "./url/content.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from "./controller/main.js";



insertHTML(url.template.header,id.header,runAfterHeader);
insertHTML(getContentURL(),id.content,runAfterContent);
onHashChange(runAfterHashChange);


