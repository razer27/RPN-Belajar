// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;
for (i = 0; i < input; i++) {
  let k = "";
  for (j = 0; j <= i; j++) {
    k += "*";
  }
  console.log(k);
}
