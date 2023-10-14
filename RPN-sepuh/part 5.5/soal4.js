// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";

let exampleFirstWord4 = word4.substring(0, 3);
let exampleKeduaWord4 = word4.substring(4, 14);
let exampleKetigaWord4 = word4.substring(15, 17);
let exampleKeempatWord4 = word4.substring(18, 20);
let exampleKelimaWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let jumblahkata2 = exampleKeduaWord4.length;
let jumblahkata3 = exampleKetigaWord4.length;
let jumblahkata4 = exampleKeempatWord4.length;
let jumblahkata5 = exampleKelimaWord4.length;

console.log(
  "kata pertama: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log(
  "kata kedua: " + exampleKeduaWord4 + ",  with length: " + jumblahkata2
);
console.log(
  "kata ketiga: " + exampleKetigaWord4 + ",  with length: " + jumblahkata3
);
console.log(
  "kata ke empat: " + exampleKeempatWord4 + ",  with length: " + jumblahkata4
);
console.log(
  "kata ke lima: " + exampleKelimaWord4 + ",  with length: " + jumblahkata5
);
