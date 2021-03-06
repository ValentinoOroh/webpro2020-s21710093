//Ujian 02

//Bagian 1. Ubahlah syntax ES5 berikut ke dalam ES6

//No. 1
const calculateAge = (birthYear) => 2019 - birthYear

const yearUntilRetirement = (object) => {
    let age = calculateAge(object.year)
    let retirement = 60 - age

    if(retirement > 0){
        console.log(`${object.firstName} retires in ${retirement} years`)
    } else {
        console.log(`${object.firstName} is already retired`)
    }
}

 yearUntilRetirement({
    year : 1987,
    firstName : 'John',
})

// No. 2
const addNumber = (...angka) => {
    let sum = 0;
    angka.map((num) => sum += num)
    return sum;
}

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//NOTE: please use the map function

// No. 3
let phi = 3.14;
let power = 2;
let radius = 0;
 
let calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};
 
radius = 21;
let area21 = calculateArea({radius, power: 2 });
 
radius = 7;
let area7 = calculateArea({radius, power: 2 });
 
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// No. 4
const makeAjaxRequest = ((url, method = "GET") => console.log(url,method))
makeAjaxRequest("www.google.com");

//Bagian 2. Tulislah kode program dari soal berikut.

// No. 1
const warnaKesukaan = ((warna = "putih") => console.log(`Warna kesukaan saya adalah ${warna}`))

// No. 2
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah;

semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);