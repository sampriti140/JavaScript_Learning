"use strict";// this is a syntax to tell my node.js that i will use modern js only
/* today we will learn conversion of datatypes in js, let's see */

//here we seeing different datatypes, that we are converting into numbers
let name="Sampriti";
let state=true;
let age=undefined;
let nametoNumber=Number(name);
let statetoNumber=Number(state);
let agetoNumber=Number(age);
console.table([nametoNumber,statetoNumber,agetoNumber]); //NaN, 1, NaN
console.table([typeof(nametoNumber),typeof(statetoNumber),typeof(agetoNumber)]);// 'number', 'number', 'number'

// now we will convert datatypes into String, so let's see

let number=12345678;
let single="false";
let car=undefined;

let numbertoString=String(number);
let singletoString=String(single);
let cartoString=String(car);
console.table([numbertoString,singletoString,cartoString]); // '12345678', 'false', 'undefined'
console.table([typeof(numbertoString),typeof(singletoString),typeof(cartoString)]);// 'string' 'string' 'string'

//now we will check other datatypes
let a;
let atoBoolean= Boolean(a);
let b="";
let btoBoolean= Boolean(b);
let c="My name"
let ctoBoolean= Boolean(c);
console.table([atoBoolean,btoBoolean,ctoBoolean]);// false false true 
console.table([typeof(atoBoolean),typeof(btoBoolean),typeof(ctoBoolean)]); //'boolean' 'boolean' 'boolean'




/********************************different arithmatic operations in js**************************************/
// we can perform different arithmatic operations in our console log

// console.log(2+2); sum =>4
// console.log(2-2); minus =>0
// console.log(2*3); multiplication =>6
// console.log(4/2); division =>2
// console.log(2**3); power =>8
// console.log(3%2); modulus =>1

//some tricky conversion and some operation
console.log("1"+2+3);//output: 123, js reads from left to right, so first js encoountered a string, so it converted non strings into string and concat it
console.log(1+2+"3");//output: 33, here js first adding 1,2 then concat it with 3,
console.log(+true); // output: 1, here true is converted into number, cause it has "+" sign
console.log(+"");// output: 0, and empty string is converted into 0

// pre increment and post increment
let x=2;
let y=x++;
console.log(`x:${x}, y:${y}`);// x:3, y:2 in post increment what happens fisrt is it assign value to y, then increment x and return the value of x to x, to modify

let x1=2;
let y1=++x1;
console.log(`x1:${x1}, y1:${y1}`);// x1:3, y1:3 but here first increment  happens returns to x1, the asign to y1
