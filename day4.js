//NOTE  Slice(startIndex , endIndex)  (to extract the part of an array from startIndex to endIndex) ;

const numbers = [1,2,3,4,5,6,7,8,9,10];
const slicedOutput = numbers.slice(2,6);
console.log(numbers.slice(1))
console.log(numbers.slice(-1))
console.log(slicedOutput) //always returns a new array
console.log(numbers)     //do not modify the original array
 
// NOTE  join(separator) Convert array to string...
const intro = ['my', 'name', 'is', 'Pranav']
console.log(intro.join());

//concat
const frontend =['html','css','js']
const backend =['node','express']
const output=frontend.concat(backend)
console.log(output)
console.log(frontend,backend)

//indexOf
console.log(frontend.indexOf('css'))
//note : if element is not exist in array it gives -1 always as index -
console.log(frontend.indexOf('cs'))
//NOTE indexOf returns the index of element if exists else returns -1


//NOTE FLAT NESTED ARRAY FLATTEN : 
const nestedArray = [1,2,[3,4],[5,6,[7,8]],9,10]
console.log(nestedArray.flat(2)) //flattens the array till depth of 2

//NOTE HIGHER ORDER FUNCTION :
function sayHI(){
    console.log('HI')

}
function greet(callback){
    console.log('callback fn sayHI', callback)
callback()
}
greet(sayHI)


//NOTE FOREACH
const odd = [1,,3,5,7,9];
//always returns undefined 
const forEachOutput = odd.forEach((el)=>{

})

//NOTE MAP****  (create a new array which is the result ...some transformation operaation you have applied in the callback function )
const nm = [2,4,6,8,10];
const mappedOutput = nm.map((el)=>{
    return el *2 ;
})

//NOTE FILTER (returns a new array of filtered items on the basis of the condition you have applied in the callback function )
const product =[
    { name : 'FRIDGE', category: 'electronics' },
    { name : 'iphone', category: 'mobile' },
    { name : 's25 ultra', category: 'mobile' },
];

const filterOutput = product.filter((el)=>{
    return el.category === 'mobile'
  })
  console.log(filterOutput)


  //NOTE 'FIND' returns only single item . Do not return any array
  const findOutput = product.find(el => el.category === 'mobile')
  console.log(findOutput) 

  //FINDINDEX (return the index of the first element whic satisfies the condition in the callback function )
  const oddnumbers = [3,5,7,9];
  const findIndexOutput = oddnumbers.findIndex((el)=>{
    return el >5 ;
  })

  //NOTE REDUCE(reduce a array into single value)
  const arrNUm = [1,2,3,4,5,6];

  const reduceOutput = arrNUm.reduce((acc,el)=>{
    console.log(acc , 'iterating el' , el)
    return acc * el
  },0)
  console.log(reduceOutput)