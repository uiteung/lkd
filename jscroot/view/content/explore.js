import {map} from '../../controller/peta.js';


export async function main(){
    await addCSS("assets/css/styles.css");
    map.updateSize();
}