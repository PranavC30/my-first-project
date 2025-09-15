const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const btn = document.getElementById('btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value;
  console.log(searchQuery);
  btn.textContent = 'Searching....';
  fetch(` http://www.omdbapi.com/?s=${searchQuery}&apikey=f53889df`)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => {
      btn.textContent = 'Search';
    });
});


//you have to use await keyword in front of the functions which are returning the promise, await will wait until the promise is resolved and after that save the result into the variable
async function fetchData(){
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    console.log(data)

}
fetchData()
 
//const test = async() => {}

    console.log('1')
    Promise.resolve('hello').then((data) =>{
        console.log(data)
    })
    setTimeout(() =>{
        console.log('timer')

    },0)
    console.log('2')

    //NOTE event loop , callback queue , microstask queue , callstack

    //NOTE OOPS object oriented programming (javascript)
    const square = 4
    function generateSquare(side){
        console.log(`sqaure has ${sides}`)
    }
    generateSquare(side)

    //side value =>
        const obj = {
  side: 4,
  generateSquare: function () {
    console.log(`square has ${this.side}`);
  },
};

//factory function 
function genrateNewsquare(side){
return {
    side : side ,
    generateSquare: function () {
        console.log(`square has ${this.side}`);
      },
}
}
console.log(genrateNewsquare(1))
console.log(genrateNewsquare(2))

//NOTE CONSTRUCTOR FUNCTION: 
function Person (firstName){
    console.log(this)
    this.firstName = firstName

}
const test = new Person('test')
console.log(test)

//TASK create a student constructor function takes (name, rollno. and department. createa method intro to console.log('My name is test, rollno. is 234 and department is CSE) )
// Constructor Function
function Student(name, rollno, department) {
  this.name = name;
  this.rollno = rollno;
  this.department = department;

  this.intro = function() {
    console.log(`My name is ${this.name}, rollno. is ${this.rollno} and department is ${this.department}`);
  };
}

// Example
const student1 = new Student("Test", 234, "CSE");
student1.intro();

const Aman = new Student('Aman', '3424cs', 'CSE');
const Rahul = new Student('Rahul', '4323', 'CSE');
console.log('rahul', Rahul);
console.log(Aman);
console.log(Aman.intro());

Student.prototype.test = function () {
  console.log(
    'this is test set on prototype which going to share for each student instance'
  );
};

Aman.test();
Rahul.test();
// const newarr = new Array(1,2,3);
// console.log(newarr)


//adding a new method on the array prototype
Array.prototype.hi = function(){
    console.log('this is random method hi');

}
console.log([1,2,3].hi())

const obj2 = {
  age: '24',
};
//we can use the __proto__ property to directly set the prototpye  property to any  reference object
const obj1 = {
  firstname: 'test',
  __proto__: obj2,
};
console.log(obj1);
console.log(obj1.age);

//ES6 CLASSES

class Person1 {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const Ram = new Person1('Ram', '34');
console.log(Ram);

//new updated object literal
const firstname = 'ritesh';

const obj3 = {
  firstname, //if key and value have same name we can use directly
  intro: function () {
    console.log(this.firstname);
  },
  intro1() {
    console.log(this.firstname);
  }, //new way of writing method in the object
};

console.log(obj3);



