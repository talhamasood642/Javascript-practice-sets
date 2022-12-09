//  CHAPTER - 02
// TOPIC OPERATORS AND CONDIOTIONAL


// CHAPTER - 02 QNO-1 

// let age = prompt("Whats your Age")

// if(age > 10 && age <= 20){
// console.log("Your Age is lie 10 to 20");
// } else{
//     console.log("Your age is not lie 10 or 20");
// }


// CHAPTER - 02 QNO-2
// TOPIC SWITCH CASE

// let age = prompt("Whats your Age?");
// age = Number.parseInt(age)
// switch (age) {
//     case 12:
//         console.log("Your age is 12");
//         break;
//     case 13:
//         console.log("Your age is 13");
//         break;
//     case 14:
//         console.log("Your age is 14");
//         break;
//     case 15:
//         console.log("Your age is 15");
//         break;
//         default:
//             console.log("Your age is not special");
// }


// CHAPTER - 02 QNO-3

// let num = prompt("Type A Number");
// num = Number.parseInt(num)

// if(num % 2 == 0 && num % 3 == 0){
//     console.log("This number is divisible by 2 & 3");
// }
// else{
//     console.log("This num is not divisible by 2 & 3");
// }


// CHAPTER - 02 QNO-4

// let num = prompt("Type A Number");
// num = Number.parseInt(num)

// if(num % 2 == 0 || num % 4 == 0){
//     console.log("This number is divisible by 2");
// }
// else if(num % 3 == 0){
//       console.log("This number is divisible by 3");
// }
// else{
//     console.log("This num is not divisible by 2 & 3");
// }



// CHAPTER - 02 QNO-5
// const age = prompt("Enter Your age")
// console.log( age >= 18? "You can drive" : "you can not drive");



// TOPIC FOR LOOP
// CHAPTER - 02 QNO-1

// let sum = 0
// let n = prompt("Enter the Number of N")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//     sum += (i+1)
//     console.log((i+1) ,"+");
// }
//     document.write("Sum of first " + n + "natural number is" + sum);


// TOPIC FOR IN LOOP
// CHAPTER - 02 QNO-2

// let obj = {
//     harry: 90,
//     shubh: 30,
//     shivika: 99,
//     ritika :50,
//     shiv: 80
// }
// for(let a in obj){
//     console.log(" Marks of " + a + " are " + obj[a]  );
// }


// TOPIC FOR OF LOOP
// CHAPTER - 02 QNO-3

// for(let b of "Talha"){
//     console.log(b);
// }


// TOPIC WHILE LOOP
// CHAPTER - 02 QNO-1

// let a = prompt("Enter a Number");
// a = Number.parseInt(a);

// let i = 0
// while (i < a){
//     i++
//     console.log(i);
    
// }

// TOPIC DO WHILE LOOP
// CHAPTER - 02 QNO-2

// let a = prompt("Enter a Number");
// a = Number.parseInt(a);

// let i = 0

// do{
//     i++
//     console.log(i)
// } while (i < a)



// TOPIC FUCNTIONS
// CHAPTER - 02 QNO-1

//Focus
function OneplusAvg  (x , y){
   console.log("done");
   return Math.round (1 + (x + y) / 2);
} 
let a = 4;
let b = 3;
let c = 6;

console.log("One plus of Average num of a + b is = " , OneplusAvg (a , b));
console.log("One plus of Average num of b + c is = " , OneplusAvg (b , c));
console.log("One plus of Average num of a + c is = " , OneplusAvg (a , c));


// TOPIC FUCNTIONS
// CHAPTER - 02 QNO-2
const sum2 = (a , b) => {
    return a + b
}
console.log(sum2(7 , 6))

// CHAPTER - 02 QNO-2
const hello = () => {
    console.log("Hello How Are You");
    return "Hi"
}
// hello(); // Focus
const v = hello()
console.log(v);

