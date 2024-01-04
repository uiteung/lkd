import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11';


export function main(){
    setInner("biggreet","Halo Ngadimin");
    Swal.fire({
        icon: "success",
        title: "Anda tidak memiliki pesan baru",
        showConfirmButton: false,
        timer: 1500
      });
}