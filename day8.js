let fname = 'test'
function greet (){
    let fname='test1'
    console.log(`hello ${fname}`)
}
greet()
console.log(`hello ${fname}`)


//NOTE WINDOW OBJECT
var course = 'mern'  //all the variable declared with the var keyword automatically becomes the part of the window object (we also call variable declared with var =>global varaible)
let product = 'phone'
console.log(window) //not a js part it comes with browser


//NOTE THIS KEYWORD
console.log(this.course) //points to window object

function test(){
    console.log(this) //points to window object


}

test()

//NOTE IN THE OBJECT
const car = {
    brand: 'Honda',
    color: 'white',
    getDetails : function(){
        console.log(this)
    }
}
//do not use arrow function on a method, this arrow function do not have its own this keyword it uses its parent(lexical) scope
car.getDetails()

//NOTE HOISTING : uplift the function declaration  variable to te top of the scope.
//It will create a key value pair in the window object.

console.log(b)
var b
test2()
function test2(){
    console.log('test2 is running...')
}

console.log(c) //tdz(tempered dead zone) starts from here 
let c = 4 //tdz ends here
 
//WE ARE DONE WITH WINDOW , THIS KEYWORD , HOISTING

//NOTE DOM (Document Object Model)
console.log(document) //root node : complete html file
console.log(document.body)
 
//NOTE DOM MANIPULATION (SELECT , UPDATE , REMOVE , ADD)

//NOTE SELECT (we have 5 methods to do so)
//NOTE document.getElementsByTagName()
//NOTE returns an htmlcolection, it looks like an array but its originally not an array
const heading = document.getElementsByTagName ('h1')
console.log(heading[0])
console.log(heading[1])
console.log(heading)
//Convert this heading into an array
const newHeadingData = [...heading]
console.log(newheadingData)

//NOTE SELECT METHOD _2 => document.getElementsByClassName
//NOTE return htmlcollection 
const para = document.getElementsByClassName ('para')
console.log(para)

//NOTE getElementById
const headingFirst = document.getElementById ('heading')
console.log(headingFirst)


//NOTE querrySelector
//  returns the first element which matched the selector you have passed in the method  
const newHeading  = document.querySelector('.para')
console.log(newPara)
//NOTE querrySelectAll
//NOTE returns nodelist
const newParaUsingQuerrySelectAll


//NOTE  READING THE CONTENT AND UPDATE:
//There are three types :- 

console.log(document.body.textContent)
console.log(document.body.innerText)
console.log(document.body.innerHTML)

//NOTE changing the inner html of the div using innerHTML  property , replace all the existing html  
container.innerHTML = `<span>hello</span>`
//container.innerText = `<span> hello </span>` //(wrong)
//NOTE only use textContent and innerText to insert text specific data not html tags for html tags only use innerHTML

//NOTE NEXT UPDATING HREF IN ANCHOR TAG :
const anchorLink = document.getElementById('link');
//NOTE change href ;
console.dir(anchorLink)
anchorLink.href = 'https://www.blinkit.in'
anchorLink.innerText= 'Blinkit'

//NOTE change the src in the image next
//NOTE next use an input tag then access the input value now use value attribute for static value; 
const firstNamee = document.getElementById('name');
console.log(firstNamee.value)
// use variableName.value


