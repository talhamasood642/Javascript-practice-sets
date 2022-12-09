// CHAPTER-04

// TOPIC  STRINGS
// CHP-04 QNO-01

let str = "Tal\"";
console.log(str.length);


// CHP-04 QNO-02
const sentence = 'The quick brown for jumps over the lazy dog.'
const word = 'fox'
console.log(sentence.includes(word));
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not"} in this sentence`);



// CHP-04 QNO-03

console.log(word.toLowerCase());
console.log(word.toUpperCase());



// CHP-04 QNO-04

let str2 = "Please give rupees 1000";
let amount = Number.parseInt((str2).slice(19));
console.log(amount);
console.log(typeof amount);


// CHP-04 QNO-05

let str3 = "Masooood";
// str3[3] = "ood" str3 is not change becaused string are immutable
console.log(str3);
console.log(str3.replace("oo", ""));


// TOPIC 1 INTRODUCCTION TO Array
// BASIC

// Def: Arrays are variable which can hold more than one value

// // CHP-04 QNO-01
let marks_class_12 = [61, 82, 93, 84, null, false, "not present"];
console.log(marks_class_12);
marks_class_12[1] = 98;  // changing the value of an array
marks_class_12[7] = 89;  // adding a new value of an array
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);
console.log(marks_class_12[8]);    // will be undefined beacause index 8 does not exist
console.log(marks_class_12.length);
console.log(typeof marks_class_12);



// TOPIC 2 ARRAYS METHOD
// CHP-04 QNO-01 "Method One toString"

let num = [1, 2, 3, 4, 34]
let b = num.toString()    //b is now a string
console.log(typeof b);

// CHP-04 QNO-02 ("Method Two "JOIN")
let c = num.join("_")
console.log(c, typeof c);

// CHP-04 QNO-03 "Method Three "POP"
// FOCUS

let d = num.pop();      // POP returns the popped element
console.log(d, num);   // POP also update the origoinal Array
// num.pop();
// console.log(num);

// CHP-04 QNO-04 "Method fourth "PUSH"
// FOCUS
let e = num.push();
console.log(e);
num.push(55);           // push returns the new Array length
console.log(num);       // PUSH also modify the original Array


// CHP-04 QNO-05 "Method Fifth "SHIFT"
// FOCUS

let shift = [1, 2, 3, 4, 5];
let s = shift.shift()   // Shift removes the first element of an Array
console.log(s, shift);  // Shift also modify the Original Array 

// CHP-04 QNO-06 "Method Sixth "UNSHIFT"
// FOCUS

let un = shift.unshift(78)  // UNSHIFT add a new value to the first element
console.log(un, shift);    // of an Array Shift also modify the Original Array

// CHP-04 QNO-07 "Method Seventh "DELETE"
// FOCUS

let delet = [1, 2, 3, 4, 5, 6, 7, 8];
let del = delete delet[0]                // Delete is not a function delete the value of ana array
console.log(del , delet, delet.length);  // Delete does not the change of an array length 

// CHP-04 QNO-08 "Method Eight "CONCAT"
// FOCUS
// CONCAT return the new Array And merge the All Array

let concat  = [1, 2, 3, 4, 5, 6, 7, 8];
let concat1 = [11, 12, 13, 14, 15, 16, 17, 18];
let concat2 = [11, 21, 31, 41, 51, 61, 71, 81];

let concalAll = concat.concat(concat1, concat2)
console.log(concalAll);
console.log(concat , concat1 ,concat2);


// CHP-04 QNO-09 "Method Ningth "SORT"
// FOCUS

const compare = (a , b) => {
        return b - a
} 

let sort  = [22, 133, 544, 855, 66, 977, 688];
let sor = sort.sort()  // SORT modify the original Array
console.log(sor);
let so = sort.sort(compare)  // Compare return the descending order value sof an array
console.log(so);


// CHP-04 QNO-10 "Method Tenth "SPLICE AND SLICE" *VERY IMPORTANT CONCEPT*
// FOCUS

















