let nama ="stenly";
//let nama = "adam";    //Error!!
console.log(nama);

//Scope dalam javascript
// 1. Function scope (var)
// 2. Block scope


//(function tes(){
//for(var i =0;i<10;i++){
  //  console.log(i);
//}
//})();
//tes();
//console.log(i);

//for (let i=0;i<10;i++){
 //   console.log(i)
//}
//console.log(i)

// 6
// {
//     let i;
//     for(i = 0; i<10;i++){
//         console.log(i)
//     }
// }

const person = {
    nick: "Andi",
    role: "Tanker",
}
console.log("My nick is "+person.nick+". I playing role "+person.role+".");

console.log(`My nick is ${person.nick}. I playing role ${person.role}.`);