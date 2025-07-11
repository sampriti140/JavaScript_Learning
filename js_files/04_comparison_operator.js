/* Today we will learn about different comparison operators in js
we have many comparison operatiors here, like >,<,>=,<=,==,=== but ever operator works diffently,

First of all I want to say, never pureposefully write code which is confusing, readable code is always the best choice
here we will see some comparison which can give value unexpectedly, so let's see
*/
// ">" greater than operator
// "<" less than operator
// ">=" greater than equals to
// "<=" less than equals to
// "==" equals to 
// "===" checks the value and datatype
console.log(4>2); //true
console.log("4">2);//true, but see "4">2, how and why?
console.log("4"==2);//false
                    
// operators like >,<,>=,<= always convert values in types, with which we are comparing. like in first example "4" is converted into 4, so the result is true.
//but == or === doesn't convert values

console.log(null>=0);//true
console.log(null<=0);//true
console.log(null==0);//false
