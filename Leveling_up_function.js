

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);     //here both let and const are local variable so it can not be accesed out side the scope
// console.log(b);
console.log(c);
console.log("=======");

let ram = 300;     //outaside the scope let,const,var both are  global scope
const sita =200;
var gita = 500;
if(true) {
    let ram = 10;
    const sita = 20;
    var gita = 30;
    console.log("Inner: ",gita);
    console.log("Inner: ",ram);
    console.log("Inner: ",sita);
}
console.log(gita);      //var can be assed everywhere because var always a glocal scope
console.log(ram);
console.log(sita);

console.log("==========");

//function scope
function userName() {
    let x =50;
    const y =80;
    var z = 100;
    console.log(x);
    console.log(y);
    console.log(z);
}
userName();

console.log("==========");

function one() {
    const name = "liza";
        function two() {
            let website = "youtube";
            console.log(name);
            console.log(website);

        }
        console.log(name);
        //  console.log(website);
         two();
}
one();

console.log("========");
if(true) {
    let userName = "hitesh";
        if(userName == "hitesh") {
            let website = " amazon";
            console.log(userName + website);
        }
}

let name = "sita";
function sayHello() {
    console.log("hello "+name);
}
sayHello();

console.log("========");

//function expression - sometimes problem occuredue to poluted of global scope function expression is used to remove that polute. 
//IIFE(immediately invoked function expressions) 

(function chai() {
    //named IIFE
    console.log("DB connected");
})();

( () => {    //SIMPLE IIFE
    console.log("DB CONNECTED WITH YOUR FILE");
})();

( (name) => {    //SIMPLE IIFE
    console.log("hii "+ name);
})('liza');

console.log("***********");

//returning function
function product(a,b) {
    return a*b;
}
let a = product(10,20);
console.log(a);
console.log("product is: "+product(10,5));

console.log("***********");

//return multiple value using object
function Language() {
    let first = 'HTML',
        second = 'CSS',
        Third = 'Javascript'
    return {
        first,
        second,
        Third
    };
}
let { first, second, Third } = Language();
console.log(first);
console.log(second);
console.log(Third);

console.log("*******");

// ARROW FUNCTION
const myName = function() {
    let userName = "liza";
    console.log(userName);
    console.log(this.userName);
    console.log(this);
}
myName();

const firstName = () => {
    let userName = "puja";
    console.log(userName);
    console.log(this.userName);
    //console.log(this);   //we can not use this keyword in arrow function.
}
firstName();

const addTwo = ( num1 , num2 ) => {
    return num1 + num2;
}
console.log(addTwo(10,20));

//implicit return in arrow function

const subTwo = (num1,num2) => num1 - num2 ;
// or we can write - const subTwo = (num1,num2) => (num1 - num2) ;
console.log(subTwo(20,10));

const mulNo = (num1 , num2) => ({username:'liza'});
console.log(mulNo(5,7)); 


//this keyword

const user = {
    userName : "liza",  //these are key value pair
    price : 999,

    welcomeMessage : function() {
        console.log(this.userName , 'welcome to website');
        // console.log(this);        //this refers to the current context
    }

}
user.welcomeMessage();
// user.userName = 'sam';
user.welcomeMessage();
console.log(this);   //it refers to empty object


console.log("*************");

//ERROR HANDLING IN JS USING TRY AND CATCH





