//FUNCTION

//Global
// const olahraga = 'Basketball';

// function namaAtlet() {
//   let atlet = 'Stephen Curry';
//   const noMessi = 10;
//   console.log(olahraga);
//   if (olahraga === 'Basketball') {
//      atlet = 'Kobe Bryant';
//      const noKobe = 24;
//      console.log(olahraga); 
//   }
//   return atlet;
// }

// console.log(namaAtlet());
// console.log(olahraga); 

//Func Expr
const penjumlahanbujursangkar = function(a, b)
{
    return a*a+b*b;
};
console.log(penjumlahanbujursangkar(2,5));
console.log(penjumlahanbujursangkar(5,7));

console.log(tambah(2,2));
console.log(kali(5,5))
function tambah(a,b){
    return a+b;
}
function kali(a,b){
    return a*b;
}