function ucapkanSalam() {
    return "Selamat Pagi";
};

// Arrow function
const namaFungsi = (parameter1, parameter2) => {
    // kode yang ingin dijalankan dalam fungsi
};

// atau bila fungsi tersebut tidak memiliki parameter sama sekali
const namaFungsiTanpaParameter = () => {
    // kode yang ingin dijalankan dalam fungsi
}

// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
};
  
console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
// fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
  
console.log(namaJenisAnjing()); // Output: Pug (hasil random)