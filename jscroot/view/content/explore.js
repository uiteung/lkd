import {map} from '../../controller/peta.js';
import {addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";


export async function main(){
    await addCSS("assets/css/styles.css");
    map.updateSize();
}