function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}
singSong();
//argument

function greet(person){
    console.log("person is: ",person);     
}
greet('liza');

function myFunction(x, y = 10) {
    sum = x+y;
   console.log(sum);
  }
  myFunction(6);
 

 findMax(1, 123, 500, 115, 44, 88);    //function call
function findMax() {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  console.log(max);
}

// ARROW FUNCTION: (compact way of writing a function)

/* SYNTAX: const functionName/variablename = (param1,param2,....){
        do some work
 }
 functionName(value1,value2,....)*/

 const arrowMul = (x,y) => {
      let s = x*y;
      console.log(s);
 }
 arrowMul(3,4);
console.log("**********");
//  example:
function printString(str){
 let  count = 0;
   for(let char of str){
      if(char ==='a'|| char === 'e'||char === 'i'||char === 'o'||char === 'u'){
        count++
      }
   }
   console.log(count);
 }

printString("lizasamal");

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



// function repeat('str' ,numTimes) {
//     let result = '';
//     for(let i = 0; i < numTimes ; i++ ){
//         result = result + str
//     }
//     console.log(result);
// }

