// question number 01

let emptyArray = [[], [], []];

// question number 02

// DECLARE AND INITIALIZE A MULTIDIMENSIONAL ARRAY REPRESENTING THE MATRIX

const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}


console.log("matrix:");
for (let i = 0; i < matrix.lenght; i++){
    console.log(matrix[i].join(" "));
}


// question number 03

// PRINTING NUMERIC COUNTING FROM 1 TO 10 

for (let i = 1; i <= 10; i++){
    console.log (i);
}

// question number 04

// MULTIPLICATION TABLE OF ANY NUMBER( USER INPUT FOR NUMBER AND LENGHT )

let number = +prompt("Enter a number to show its multiplication table");
let lenght = +prompt("Enter lenght of multiplication table");

console.log(`Multiplication table of $ {number}`);
console.log(`Lenght $ {lenght}`);

for (let i = 1; i<= lenght; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// question number 05

// WRITE A PROGRAM TO PRINT ITEMS OF THE ARRAY USING A FOR LOOP

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
  console.log("Element at index " + i + " is " + fruits[i]);
}


// question no 09

// WRITE A PROGRAM TO IDENTIFY THE SMALLEST NUMBER IN THE GIVEN ARRAY A = [ 24, 53, 78, 91, 12]





// question no 10

// WRITE A PROGRAM TO PRINT MULTIPLE OF 5 RANGING FROM 1 TO 100

for (let i = 1; i <= 100; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}