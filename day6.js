//Count the number of vowels in the string 
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example
console.log(countVowels("Hello Betu")); // Output: 4

//write a function to check if a string is a pallendrome 
function isPalindrome(str) {
  str = str.toLowerCase(); 
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; 
    }
  }
  return true; 
}
// Example
console.log(isPalindrome("lol"));
console.log(isPalindrome("hello")); 
  
//From a string like "1,2,3,4", return the sum of numbers
function sumFromString(str) {
  const arr = str.split(","); 
  let sum = 0;
  arr.forEach(num => {
    sum += Number(num);
  });

  return sum;
}
// Example
console.log(sumFromString("1,2,3,4")); 

//Remove falsy values (false, 0, "", null, undefined, NaN) from an array
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
// Example
const mixedArray = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
console.log(removeFalsy(mixedArray)); 


//Remove duplicates from an array [1,2,2,3,3,4,5]
function removeDuplicates(arr) {
  let unique = [];  
  arr.forEach(num => {
    if (!unique.includes(num)) { 
      unique.push(num);
    }
  });
  return unique;
}
// Example
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5]));

//Convert a snake_case string to camelCase
function toCamelCase(str) {
  let parts = str.split("_"); 
  let camelCaseStr = parts[0]; 

  for (let i = 1; i < parts.length; i++) {
    let word = parts[i];
    camelCaseStr += word[0].toUpperCase() + word.slice(1);
  }
  return camelCaseStr;
}
// Example
console.log(toCamelCase("hello_world"));       

//WE CAN ACCEPT INDEC BY PASSING SECOND PARAMETER
const arr = [1,2,3,4]
arr.map((el,index)=>{
    console.log(el,index)
})





