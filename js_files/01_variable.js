/* types of variable
var= global scoped, we can access and change it from anywhere in our code, we can declare it later also.
let= it's mainly block scoped, we can't declare it later.
const= it's fixed, and we cannot declare it without defining. */
var id=344;
let myname="sampriti"
// const projectCode;// here we get error
const projectCode="05"
console.table([id,myname,projectCode])// this will print every variable as in table format

var id=399;// this is possible, this will chnage the value of id
//let myname="das"; but this is not;
//projectCode="09"; we can't also change our const variable.
console.table([id,myname,projectCode])