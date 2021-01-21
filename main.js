let idSaya = {
    nama : "Rizal Rahardi",
    panggilan : "Rizal",
    umur : 22,
    hobi : "bersepeda",
    status : "jomblo",
    alamat : {
        jalan : "Jl. Aman Damai Sentosa",
        desa : "Harmonis",
        rtRw : "00/00",
        no : 1000
    }
};

console.log(idSaya.nama);
console.log(idSaya);


console.log(`Saya ${idSaya.nama} biasa dipanggil ${idSaya.panggilan} umur saya ${idSaya.umur} tahun, hobi ${idSaya.hobi} dan berstatus ${idSaya.status}
beralamat di ${idSaya.alamat.jalan} Desa ${idSaya.alamat.desa} Rt/Rw ${idSaya.alamat.rtRw} No. Rumah ${idSaya.alamat.no}
`);
