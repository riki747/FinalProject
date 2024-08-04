"use strict";
function cetakSegitigaSikuSiku(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
        let spasi = ''.repeat(tinggi - i);
        let bintang = '*'.repeat(i);
        console.log(spasi + bintang);
    }
}
cetakSegitigaSikuSiku(10);
