// TRAVERSAL OF ARRAY
const arr = [1,2,3,4,5,6]
for(let i=0 ; i< arr.length ; i++){
    console.log(arr[i])
}

//FIND THE SUM OF ELEMENTS IN AN ARRAY
const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];  // add each element to sum
}

console.log("Sum of array elements:", sum);

//FIND THE MAXIMUM NUMBER IN AN ARRAY
const arr = [10, 25, 3, 99, 42, 56];
let max = arr[0];   // assume first element is max

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum number is:", max);

//CREATE A FUNCTION TO COUNT AN ELEMENT OCCURENCE IN AN ARRAY countOccurence(arr,target);
function countOccurrence(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

// Example usage
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrence(arr, 2));  // Output: 3
console.log(countOccurrence(arr, 5));  // Output: 1
console.log(countOccurrence(arr, 7));  // Output: 0

//CREATE A FUNCTION TO PRINT THE TABLE FOR GIVEN NUMBER TILL 10
function printTable(num) {
  console.log(`Table of ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
printTable(5);

//CREATE A LOOP TO FILL THE ELEMENT IN AN ARRAY TILL 20
let arr = [];

for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

console.log("Array elements till 20:", arr);

//REVERSE AN ARRAY USING FOR LOOP
const arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log("Original Array:", arr);
console.log("Reversed Array:", reversed);

//FIND THE INDEX OF THE TARGET ELEMENT findIndex(arr,target) return-1 if not found;
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // index mil gaya
    }
  }
  return -1; // agar nahi mila
}

// Example usage
const arr = [10, 20, 30, 40, 50];
console.log(findIndex(arr, 30));  // Output: 2
console.log(findIndex(arr, 100)); // Output: -1

//SEGGREGATE EVEN AND ODD NUMBER FROM AN ARRAY ; CREATE SEGGREGATE ARRAYS FOR BOTH EVEN AND ODD
function segregateEvenOdd(arr) {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return { even, odd };
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = segregateEvenOdd(arr);

console.log("Even Numbers:", result.even);
console.log("Odd Numbers:", result.odd);

//CREATAE A RIGHT TRIANGLE STAR PATTERN 
function rightTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// Example usage
rightTriangle(5);

//CREATE A INVERTED RIGHT TRIANGLE
function invertedRightTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// Example usage
invertedRightTriangle(5);

//CREATE A SQUARE STAR PATTERN
function squarePattern(size) {
  for (let i = 1; i <= size; i++) {
    let pattern = "";
    for (let j = 1; j <= size; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

squarePattern(5);

//NOTE POP=> last remove , shift=> start remove , unshift=> start add.

//NOTE INCLUDES
console.log(colors.includes('white')) ; 





//SIR KE NOTES

//NOTE - create a nested switch case on the basis of country state and city
// country => state => city ;

//NOTE LOOPS ;
// for , do while , while for of  for in

//FOR LOOP ;

// for(initialization ; condition ; increment/decrement );

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//traversal of an array ;
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//NOTE FIND THE SUM OF elements in an array  ;
//NOTE find the maximum number in an array ;
//NOTE create a function to count an element occurance in an array countOccurance(arr,target);
//NOTE create a function to print the table for given number till 10 ;
//NOTE create a loop to fill the element in an array till 20;
//NOTE Create a new REVERSE array USING FOR LOOP ;
//NOTE find the index of the target element findIndex(arr, target) return -1 if not found;
//NOTE Seggregate even and odd number from an array ; create separate arrays for both even and odd;
//NOTE  arr.push(i)

//NESTED LOOP

// for(let i = 1 ; i < 5  ; i++){
//     for(let j = 1 ; j < 5 ; j++){
//         console.log(`${i} -- ${j}`)
//     }

// }
// function printTable(count , till) {
//     for(let i = 1 ; i <= count ; i++){
//         for(let j = 1 ; i <= till ; j++){

//             console.log(`${i} X ${j} = ${i * j}`)
//         }
//     }
// }

// printTable(10,20)

// 1,2,3,4,5,6,7,8,9,10 => 20

//NOTE create a right traingle star pattern ;
//NOTE create a inverted right traingle ;
//NOTE create a square star pattern ;
//NOTE pyramid and inverted pyamarid and diamond pattern pyramid
for (let i = 1; i <= 5; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

//NOTE WHILE AND DO WHILE ;

let i = 0;
const newArr = [1, 2, 3, 4, 5];
while (i < newArr.length) {
  console.log(newArr[i]);
  i++;
}

let j = 1;
do {
  console.log(`j : ${j}`);
  j++;
} while (j < 10);

//NOTE FOR OF AND FOR OF;
const products = ['mobile', 'tv', 'ac'];
for (let product of products) {
  console.log(product);
}
for (let i in products) {
  console.log(i);
}

const car = {
  name: 'test',
  color: 'blue',
};
//NOTE LOOPING AN OBJECT IN JS  *****
for (let key in car) {
//   console.log(key);
  console.log(`${key} : ${car[key]}`);
}

// for of doesnot work on object
// for(let value of car){
//     console.log(value)
// }

//NOTE -  ARRAY METHOD ____ BUILTIN ;
//POINTS TO REMEBER : what method will return and which method modifies the original array .

//NOTE 1 PUSH (ADD ELEMENT IN THE LAST) ;

const colors = ['red','blue','green'];
const pushOutput = colors.push('white');
console.log(pushOutput) ;//return new array length ;

//NOTE POP => last remove , Shift => start remove and Unshift => start add

//NOTE PUSH , POP , SHIFT , UNSHIFT MUTATE ORIGINAL ARRAY ;

//NOTE INCLUDES 
console.log(colors.includes('white')) ;

//NOTE  Slice(startIndex , endIndex);
const slicedOutput = colors.slice(1,2);
  


