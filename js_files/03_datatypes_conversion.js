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
