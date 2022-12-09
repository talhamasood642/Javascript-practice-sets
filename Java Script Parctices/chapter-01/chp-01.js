// CHP - 01 - Q1

let a = "Talha";
let b = 45;
b = Number.parseInt(b)   //How to digits convert in a number
console.log("a + b = " , (a + b));


// CHP - 01 - Q2
// How to check the type of strings & Numbers

console.log(typeof a);
console.log(typeof b)


// CHP - 01 - Q3

const c = {
    name: "Talha",
    class: 12,
    isprinciple: false
}

// c = 45 , "Harry";                     Const Change Value And String NOT possible
// c = {}, [];                           Const Add Array []  And Object {} Not Possible  

// CHP - 01 - Q4           

c ['name2'] = "Harry";                // Const add Object and Value Possible 
c ['name'] = "Harry";                 // Const Change object value Possible 

console.log(c);

// CHP - 01 - Q5 Write a Word Meaning

const d = {
    word: "Alfaz",
    meaning: "Matlab",
    work: "Kaaam"
}
console.log(d);
console.log(d.work);



// TOPIC EXPRESSION AND OPERTATOR
// CHP - 01 - Q1


// Airthematic Operator
let e = 45;
let f = 4;
console.log("e + f = " , e+f);
console.log("e - f = " , e-f);
console.log("e * f = " , e*f);
console.log("e / f = " , Math.round(e/f));
console.log("e ** f = " , e**f);
console.log("++e = " , ++e);
console.log("e++ = " , e++); 
console.log("--e = " , --e); 
console.log("e-- = " , e--); 

// Assignment Operator
let assignment = 5;
assignment += 5;     //same as assignment = assignment + 5;
console.log(assignment); 



// Comparison  Operator

let comp1 = 6;
let comp2 = 7;

console.log("comp1 ==  comp2 ",  comp1  == comp2);
console.log("comp1 !=  comp2 ",  comp1  != comp2);
console.log("comp1 === comp2 ",  comp1 === comp2);
console.log("comp1 !== comp2 ",  comp1 !== comp2);
console.log("comp1  >  comp2 ",  comp1  >  comp2);
console.log("comp1  <  comp2 ",  comp1  <  comp2);
console.log("comp1 >=  comp2 ",  comp1  >= comp2);
console.log("comp1 <=  comp2 ",  comp1  <= comp2);

if(comp1 == comp2){
    console.log("equal");
} else {
    console.log("not equal");
}


// Logicals  Operator

let logic1 = 5;
let logic2 = 6;

// And  "&&" Operator
console.log(logic1 < logic2 && logic1 == 5);
console.log(logic1 > logic2 && logic1 == 5);

// Or "||" Operator

console.log(logic1 < logic2 || logic2 == 6);
console.log(logic1 > logic2 || logic2 == 3);

// Not "!" Operator
console.log(!true);
console.log(!false);


// "Oprates" , "Operators" and "Result"

let o = 7 + 5  // 7 and 5 is a operands & + is a operator And Result is a 12
console.log(o);


// Comments
// Single Line Comments

/*Multi 
Line
Comments */


// Topic ConditionaL And Expression
// If Else

let g = prompt("Hey Whats Your Age");
g = Number.parseInt(g);
if( g < 0){
    alert("This is a inValid Age");
}
else if (g < 9){
  alert("you are a kid you cannoy even think a DRIVING")
}

else if (g < 18 && g >= 9){
    alert("you are a kid you cannoy even think a DRIVING after 18")
  }
else{
    alert("You can now drive you are above 18");
}
console.log(typeof g);

// Ternally Opertors
console.log("You can" , g < 18? "not drive" : "drive");










