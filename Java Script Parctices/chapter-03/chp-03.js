// Chp-03 Qno- 01
// Focus This Question

let marks = {
    Talha: 50,
    Tabish: 86,
    Ali: 67,
    Ameer: 40
}

// for ( let i = 0 ; i < Object.keys(marks).length; i++ ){
//     console.log("The Marks of" , Object.keys(marks)[i] , "are" , marks[Object.keys(marks)[i]]);
// }

// Problem - 02 For In Loop

for (let key in marks){
    console.log("The marks of" , key , "are" , marks[key]);
}

// Problem no 03 
// FOCUS

// let cn = 4
// let i
// while (i != cn) {
//     i = prompt("Enter a Correct Number")
//     console.log("Try Again");
// }
// console.log("You have enter a correct Number");

// Problem no 04
//FOCUS

const mean = (a, b, c, d) => {
   return((a+ b+ c+ d) / 4) 
}

console.log(mean(4, 5, 6, 7));


// TOPIC STRINGS
// Chp-03 Qno- 01

let name = "Talha"
console.log(name);
console.log(name.length);
console.log(name[0]);

let friend = 'Ali'
console.log(friend);
console.log(name.length);


// TOPIC TEMPELATE LITERALS `BACKTICS`
// Chp-03 Qno- 01

let boy1 = "Ammar";
let boy2 = "Hammad";

let sentence =`${boy1} is a friend of ${boy2}` ;
console.log(sentence);

// TOPIC ESCAPE SEQUENCE CHARACTERS
// Chp-03 Qno- 01

let fruit = 'Bana\'na'
let fruit2 = 'Bana\nna'    // \n New Line
let fruit3 = 'Bana\tna'    // \t Tale
let fruit4 = 'Bana\rna'    // \r Carriage Return
console.log(fruit);
console.log(fruit.length);
console.log(fruit2);
console.log(fruit2.length);
console.log(fruit3);
console.log(fruit4);


// TOPIC STRING
// Chp-03 Qno- 01

let MyName = "Talha";
console.log(MyName.length);
console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());
console.log(MyName.slice(2 , 4));
console.log(MyName.slice(2));
console.log(MyName.replace("Talha" , "Taz Zy"));

// Chp-03 Qno- 02
let Friend = "Harry";
console.log(MyName.concat(" is a friend of " , Friend));


// Chp-03 Qno- 03
let friend2 = "   Reena    ";  // Spaces remove Using Trim function
console.log(friend2);
console.log(friend2.trim());

// Chp-03 Qno- 04

let fr = "Monika";
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
console.log(fr[4]);
console.log(fr[5]);

// Chp-03 Qno- 05 "HOME WORK"

let friend3 = "Mahnoor";
for (let i = 0 ; i < friend3.length ; i++){
    // console.log([i]);
    console.log(friend3[i]);
}



