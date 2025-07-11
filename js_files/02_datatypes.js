  /* in this file we will learn about js datatypes, we have primitive and non-primitive datatypes
  
  there are seven primitive datatypes available on js
  1.Numbers
  2.String      so, what is predefined datatypes? 
  3.Boolean     we divide datatypes into two catagory, according how it's stored in the memory,
  4.Null        and how to fetch the data, 
  5.Undefined   primitive- js copy the value and store it and in the time of fetching, we only get the copy of it.
  6.bigInt      non-Primitive- js stores memory of the value, in the time of fetching, it returns memory that indicates the value.
  7.Symbols

  there are three types of non primitive datatypes
  1. Array
  2. Object
  3. Function

 In java script we don't need to mention the datatype to variable, js can automatically detect it
 that's js is Dymanically Scripted laguage.  */

  //primitive
  let age=18;// we define numbers like this, it has a range, when our number is too big we use BigInt
  let x = BigInt("123456789012345678901234567890"); //here we are wrapping the number into a bigint
  let bigint=3452678917252665567989825426527615n;//n helps to save the value in big int

  let name="Sampriti"// we normally use " " to define a string, we can also use ' ' and ` ` also;
  name=`Rima`;// we changed my name using ` `
  let state=true;// boolean can either be true or false
  let a=null; //null defines empty values
  let origin;// it will set the value of origin as undefined
  let symbol=Symbol("hi there");

  console.table([age,x,name,state,a,origin,symbol,symbol.description]) 


  //non primitive
  //as you know object hold methods and properties
  const emp={
    email:"sampritidas140@gmail.com",
     id: 1,
     degisnation:"software enginner"
  }
console.log(emp)  /*{
                 email: 'sampritidas140@gmail.com',
                  id: 1,
                  degisnation: 'software enginner'
                 }*/
console.log(emp.id)//1

//now arrays, arrays is a datatype that can hold same types of data types.

let cars=["volvo","audi","bmw","hundai"]

console.log(cars);//[ 'volvo', 'audi', 'bmw', 'hundai' ]
for(let x of cars){// we are doing this using for of loop
console.log(x);
}      /*volvo
        audi
        bmw
        hundai*/

// now we can use for each loop 
cars.forEach((x)=>{
    console.log(x);// the result will be same as for of loop
})

let functionvar=function(){
  console.log("hello world");//hello world
}


// now coming to typeof operatior in js, this prints type of any datatype
// here we will check for each and every primitive datatype that we have used here
console.table({
  age: typeof(age), //'number' 
  x: typeof(x), //'bigint'
  bigint:typeof(bigint),
  name: typeof(name), //'string' 
  state: typeof(state), //'boolean'
  a: typeof(a), //'object'
  origin: typeof(origin), //'undefined'
  symbol: typeof(symbol), //'symbol'
});

// here we will check for each and every non-primitive datatype that we have used here
console.log(typeof(emp));//object
console.log(typeof(cars));//object
console.log((functionvar));//[Function: functionvar]