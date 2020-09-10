//FOR
// const 
// ML ={

// Tim : "EVOS",
// nickName : [ "JessNolimit","Oura","Clover","Wann","Donkey"],
// Hero : ["Grock","X-Borg","Selena","Ling","Chou"],
// tittleMPL : 1
// };
// ML[1] ={
   
// Tim : "RRQ",
// nickName : [ "LJ","R7","VYNN","XINNN","Lemon"],
// Hero : ["Khufra","Uranus","Valir","Hayabusa","Leomord"],
// tittleMPL : 2
// };  
// ML[2] ={

//     Tim : "EVOS",
//     nickName : [ "JessNolimit","Oura","Clover","Wann","Donkey"],
//     Hero : ["Grock","X-Borg","Selena","Ling","Chou"],
//     tittleMPL : 1
//     };



// for(x =0;x<=2;x++)
// {
   
//     console.log(x,':',ML[x])
// }

//SWITCH

let Hero;
let Role = "Tank";

switch (Role) {
  case "Tank":
      Hero = "Minotaur";
      break;
  case "Mage":
      Hero = "Lunox";
      break;
  case "Assassin":
      Hero = "Lancelot";
      break;
  case "Marksman":
      Hero = "Claude";
      break;
  case "Support":
    Hero = "Valir"
    break;
  case "Figther":
    Hero = "Thamuz";
    break;
  default:
    Hero = "Gusion";
}

console.log(Hero);