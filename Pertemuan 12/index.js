//Arrow Function

//Single arguments
// const calcAge = (birthYear) =>{
//     return 2020 - birthYear
// }
// console.log(calcAge(2000))

//Multiple arguments
// const calcAge = (birthYear, currentYear) =>{
//     return currentYear - birthYear
// }
// console.log(calcAge(2000,2020))

//No argument with implicit return value
// const calcAge = ()=> 2020-1992;
// console.log(calcAge());

// const year = [1990, 1992, 2001, 2005];

// const calcAgeES5 = years.map(function (el){
//     return 2020 - el
// })
// console.log(calcAgeES5)

// const calcAgeES6 = years.map((el) => 2020 - el)
// console.log(calcAgeES6)

//Default Parameter
const calcAge = (birthYear, currentYear = 2020)=> currentYear - birthYear;
console.log(calcAge(1991))
console.log(calcAge(1991,2021))