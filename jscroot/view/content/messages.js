import {addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.4/croot.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';


export async function main(){
    await addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");
    Swal.fire({
        icon: "success",
        title: "Anda tidak memiliki pesan baru",
        showConfirmButton: false,
        timer: 1500
    });
}