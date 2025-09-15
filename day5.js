const cart = [
  { name: "Shirt", quantity: 3, price: 100 },
  { name: "Jeans", quantity: 2, price: 1550 }
];

// Calculate total cart value
const totalCartValue = cart.reduce((acc, item) => {
  return acc + (item.quantity * item.price);
}, 0);

console.log("Total Cart Value =", totalCartValue);

//NOTE SOME: 
const evenNumber = [2,4,6,8];
const someOutput = evenNumber.some((ele)=>{
    return ele >2 ; 
})
console.log(someOutput) ; 

//NOTE EVERY
const numbers = [2, 4, 6, 8, 9];

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);
  

//NOTE SORT:
const numbers = [40, 5, 100, 2];
numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers);

numbers.sort((a, b) => b - a);
console.log("Descending:", numbers);

//NOTE charAt :
console.log(language.charAt(7));

//NOTE toUpperCase and toLowerCase
console.log(language.toUpperCase());
console.log(language.toLowerCase());

//NOTE SPLIT: to convert string into array
const str = 'my name is test';
console.log(str.split(' '));

//REVERSE EACH WORD OF THE GIVEN STRING => 'hello this is a string'
function reverseEachWord(str) {
  return str
    .split(" ")              
    .map(word => word.split("").reverse().join("")) 
    .join(" ");             
}
const input = "hello this is a string";
const output = reverseEachWord(input);
console.log(output);

//CAPITALIZE FIRST LETTER OF THE GIVEN STRING => 'js is single threaded'
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const input = "js is single threaded";
console.log(capitalizeFirstLetter(input));


//NOTE indexOf
const language = "JAVA IS FUN"
console.log(language.indexOf('F'))

//NOTE startsWith:
const course = 'MERNSTACK';
console.log(course.startsWith('MEZ')); 
//NOTE endsWith
console.log(course.endsWith('ACK'));

//NOTE replace and replace all:
const frontend = 'REACTJS ARE A LIBRARY'
console.log(frontend.replace('ARE', 'IS'))

//NOTE PADSTART AND PADEND
const ccNumber = '1234'
console.log(ccNumber.padStart(16 , "*"))

//create a function which take ccNumber then hide the first 12 digits only show last four .
function maskCardNumber(ccNumber) {
  const str = ccNumber.toString();
  const lastFour = str.slice(-4);
  const masked = lastFour.padStart(str.length, "*");
  return masked;
}
// Example
console.log(maskCardNumber(1234567812345678)); 

//NOTE NESTED ARRAY DESTRUCTURING
const nestedArray = [1,2,[3,4,[5,6]]]
const [k,m ,[n,o,[p,q]]] = nestedArray
console.log(k,m,n,o,p,q)

//NOTE DEFAULT VALUES:
const courses  = ['JS' , 'REACT' , 'DJNAGO']
const [language , library , framework = 'angular'] = courses
console.log(framework)


//access email and role (individual role in separate variable)
const users = [
  { name: 'test', email: 'test@gmail.com', role: ['admin', 'user'] },
  { name: 'test2', email: 'test2@gmail.com', role: ['superadmin', 'admin'] },
];

users.forEach(({ email, role }) => {
  console.log("Email:", email);
  role.forEach((r, index) => {
    console.log(`Role ${index + 1}:`, r);
  });

  console.log("------");
});

//

