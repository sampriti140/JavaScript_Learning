  /* in this file we will learn about js datatypes, there are seven datatypes available on js
  1.Numbers
  2.String
  3.Boolean
  4.Null
  5.Undefined
  6.bigInt
  7.Symbols
  so every datatypes has their own funtionalities, and all of these datatypes are predefined datatypes,
  we have another datatype called object. objects hold methods and properties in it. */

  let age=18;// we define numbers like this, it has a range, when our number is too big we use BigInt
  let x = BigInt("123456789012345678901234567890"); //here we are wrapping the number into a bigint

  let name="Sampriti"// we normally use " " to define a string, we can also use ' ' and ` ` also;
  name=`Rima`;// we changed my name using ` `
  let state=true;// boolean can either be true or false
  let a=null; //null defines empty values
  let origin;// it will set the value of origin as undefined
  let symbol=Symbol("hi there");

  console.table([age,x,name,state,a,origin,symbol,symbol.description]) 

  //creating objects and arrays
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

// now coming to typeof operatior in js, this prints type of any datatype
// here we will check for each and every datatype that we have used here
console.table({
  age: typeof(age), //'number' 
  x: typeof(x), //'bigint'
  name: typeof(name), //'string' 
  state: typeof(state), //'boolean'
  a: typeof(a), //'object'
  origin: typeof(origin), //'undefined'
  symbol: typeof(symbol), //'symbol'
  emp: typeof(emp), //'object'
  cars: typeof(cars) //'object'
});
