import {map} from '../../controller/peta.js';


export function main(){
    var viewHeight = $(window).height();
    var header = $("div[data-role='header']:visible:visible");
    var navbar = $("div[data-role='navbar']:visible:visible");
    var content = $("div[data-role='content']:visible:visible");
    var contentHeight = viewHeight - header.outerHeight() - navbar.outerHeight();
    content.height(contentHeight);
    map.updateSize();
}