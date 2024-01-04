import {getPath} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
//please always use trailing slash(/) for folder or extension for file.
// Please change https://jscroot.github.io/skeleton/ into your base url
export const croot = "/skeleton/jscroot/";

//never use slash in front of file or directory
export const folder={
    template:croot+"template/",
    controller : croot+"controller/",
    view : croot+"view/",
}

export const url={
    template:{
        content : folder.template+"content/",
        header: folder.template+"header.html",
        navbar:folder.template+"navbar.html" ,
        settings:folder.template+"settings.html" ,
        sidebar:folder.template+"sidebar.html" ,
        footer:folder.template+"footer.html", 
        rightbar:folder.template+"rightbar.html"
    },
    controller:{
        main : folder.controller+"main.js",
        navbar : folder.controller+"navbar.js"
    },
    view : {
        content:folder.view+"content/",
        header: folder.view+"header.js",
        search:folder.view+"search.js" ,
        settings:folder.view+"settings.js" ,
        sidebar:folder.view+"sidebar.js" ,
        footer:folder.view+"footer.js" 

    }
}