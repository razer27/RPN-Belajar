// Kamu akan diberikan sebuah tanggal dalam tiga variabel,
// yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21;
let bulan = 1;
let tahun = 1945;

switch (tanggal) {
  case tanggal >= 1 && tanggal <= 31:
    break;
  default:
}

let namabula = "";
switch (bulan) {
  case 1:
    namabulan = "januari";
    break;
  case 2:
    namabulan = "februari";
    break;
  case 3:
    namabulan = "maret";
    break;
  case 4:
    namabulan = "april";
    break;
  case 5:
    namabulan = "mei";
    break;
  case 6:
    namabulan = "juni";
    break;
  case 7:
    namabulan = "juli";
    break;
  case 8:
    namabulan = "agustus";
    break;
  case 9:
    namabulan = "september";
    break;
  case 10:
    namabulan = "oktober";
    break;
  case 11:
    namabulan = "november";
    break;
  case 12:
    namabulan = "desember";
    break;
  default:
    console.log("bulan");
}

switch (tahun) {
  case tahun >= 900 && tahun <= 2023:
    break;
  default:
    namaBulan = "Bulan tidak tersedia";
    break;
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);
