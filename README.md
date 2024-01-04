# jscroot
JSCroot Skeleton, copy jscroot folder to your web. Get configured :

## Set your base URL

Change Base URL in file:
1. index.js
2. url/content.js
3. controller/main.js
    ```js
    // Please change https://jscroot.github.io/skeleton/ into your base url
    import { url } from "https://jscroot.github.io/skeleton/jscroot/url/config.js";
    ```
4. url/config.js
    ```js
    // Please change https://jscroot.github.io/skeleton/ into your base url
    export const croot = "https://jscroot.github.io/skeleton/jscroot/";
    ```

Replace https://jscroot.github.io/skeleton/ into your base url.

## Slicing HTML and JS

1. Split index.html into template folder
2. Set same structure in view folder as js file
3. every js file in view, create _export function main()_ to run js for html content.
    ```js
    export function main(){
        yourscript(js);
    }
    ```
