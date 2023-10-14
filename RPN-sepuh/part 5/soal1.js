// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada

// algoritma
// buat variabel nama dan peran ( nama dan peran wajib di isi )
// jika nama tidak di isi maka akan menampirkan alert
// jika tidak memilih peran maka anda akan otomatis jadi npc
// terdapat 3 peran yaitu, Ksatria, Tabib dan Penyihir

let nama = "razer",
  peran = "tabib";

if (nama === "") {
  console.log("nama wajib di isi");
} else if (peran === "") {
  console.log("peranperan juga di isi ");
} else if (peran === "ksatria") {
  console.log("halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!");
} else if (peran === "tabib") {
  console.log("halo Tabib ${nama} , kamu akan membantu temanmu yang terluka");
} else if (peran === "penyihir") {
  console.log(
    "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
  );
}
