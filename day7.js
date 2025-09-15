const details ={
    age: 20,
    firstName:'labhya'
}
const{age:agee,firstName:fname} = details
console.log(agee,fname)

const numbers={
    a:5,
    b:8
}
//funstion parameters destructuring
const sum = ({a,b})=>a+b
console.log(sum(numbers))

//fn destructuring when arguments is an array
const getroles = ([r1,r2])=>
    console.log(r1,r2)
getroles(['admin','user'])

//Note spread operator takes out values of the array and object and write 
//ARRAY
const nums=[1,2,3,4,5]
console.log(...nums)
//USE CASES:
//1. SHALLOW COPY
const evnum =[2,4,6,8,10]
const evn = [...evnum]
console.log(evn,evnum)
evn[0]=20
console.log(evn,evnum)

//2. CONCAT
const frontend =['HTML','CSS','JS']
const backend =['REACT','NODE','EXPRESS']
const mernStack = [...frontend,...backend]
console.log(mernStack)

//3.UPDATED
const upfrontend =['figma',...frontend,'js']
console.log(upfrontend)

//4. REST OPERATOR
const products = ['AC','TV','Fridge','Mobile']
const [a,...rest]=products
console.log(a,rest)

//OBJECTS : SAME USE CASES AS ARRAY
//todo use the spread for object for similar use 
// case :point to note if you are merging two object use similar properties on both the object then notice which property replace which one;
//1. SHALLOW COPY
const demo ={
    name:'labhya',
    age:21

}
const test = {...demo}
console.log(test,demo)
test.name='lucky'
console.log(test,demo)

//2. CONCAT
const fr={
    a:10,
    b:20
}
const ba ={
    c:30,
    d:40
}
const me = {...fr,...ba}
console.log(me)

//3.APPEND
const car ={
    brand : 'Kia',
    color: 'black'
}
console.log(car)
console.log({...car , color:'Red'})

//4.UPDATE
const food={
 name:'Apple',
 color:'Red'
}
const upfood = {...food , color:'Green'}
console.log(upfood)
console.log(food)

//note REST PARAMETER
function la (a,...rest){
    console.log(a,rest)
    rest.forEach((el)=>console.log(el))
}

la(1,2,3,4,5,6)

//NOTE OBJECT METHODS
const course ={
    name:'Mernstack',
    duration:'10hr'
}
//object.key - return array of keys
const keyOutput=Object.keys(course)
console.log(keyOutput)

//object.value - return array of values
const valueOutput=Object.values(course)
console.log(valueOutput)

const entriesOutput = Object.entries(course)
console.log(entriesOutput)
entriesOutput.forEach(([keys,value])=>{
    console.log(`${keys},${value}`)
})

console.log(Math.round(3.5))
console.log(Math.trunc(8.6))
console.log(Math.floor(4.8))//lower value
console.log(Math.ceil(4.8))//upper value
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))
console.log(Math.floor((Math.random()*10)+1))

//NOTE DATE METHODS :

//to create a new data using Date ;
const date = new Date();
console.log(date);

const getMonth = date.getMonth() 
// (0-11) ;
console.log(getMonth + 1)
console.log(date.getDate());
console.log(date.getMinutes());
console.log(date.getFullYear());
console.log(date.getSeconds());

//manually generate data and time ;
const newDate = new Date(2027,8,8,5,30,20) ;
console.log(newDate) ;
//formatting 
console.log(newDate.toDateString());
console.log(newDate.toTimeString());

//NOTE TIMESTAMP 
const timeStamp = Date.now() ;
console.log(timeStamp) ; //epoch timestamp
//conversion of the epoch timestamp to the normal date and time string ;
const timeAndDate = new Date(timeStamp);
console.log(timeAndDate);
console.log(timeAndDate.setMonth(4));
//try set function for all the minutes , year , sec , day 
console.log(timeAndDate)

//SCOPES : GLOBAL , BLOCK , FUNCTION BLOCK
//1. GLOBAL
const lastname = 'test'
if(true){
    console.log(lastname)
}
function test2(){
    console.log(lastname)
}
test2()

//2.BLOCK
if(true){
    let aa = 'hello'
    const b='hii'
    var c = 'bye' //this can be access outside scope of block due to var is automatically a global keyword
}
//console.log(aa) //give error
//console.log(b) //give error
console.log(c) //will run

//3. function-block
function greet(){
    var ages =20;
    let p = 'labhya';
    const q ='dadhich';
    console.log(ages,p,q)
}
greet();
//console.log(ages) //can't access outside
//console.log(p) //can't
//console.log(q)  //can't