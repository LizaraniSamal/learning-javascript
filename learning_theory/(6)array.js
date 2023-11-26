console.log("hello world");
// let username = prompt("enter your name");
// if(username.length >= 6){
//     console.log("valid name");
// }

let days = ['sunday', 'monday', 'tuesday'];
console.log(days);
let colors = ['red','orange','blue','golden','sky','violet'];
console.log(colors);
console.log(colors[3]);
console.log(colors[1][2]);
colors[2] = 'navy blue';
console.log(colors);


//ARRAY METHODS
// Push - add to end
// pop - remove from end
// shift - remove from Start
// unshift - add to start
let num = [15,18,17,16];
num[4] = 25;
console.log(num);
num.push(30);     //adding value in the last index
console.log(num);
num.push(45,58);
console.log(num);
num.pop();        //remove dast index of an array.
console.log(num);
let newNumber = num.shift();    //shift is used remove element in first index.
console.log(newNumber);
console.log(num);
num.unshift(80);    //adding value in the first index.
console.log(num);

console.log("============");
/* We can use for-of and for-in method in array
   but for-of loop is more preferable */

   let cities = ["bbsr","ctc","rkl","bdk","jjkr"];
   for(let c of cities){
    console.log(c);
   }

  //  practise question -1

  let student = [85,97,44,37,76,60];
  let sum = 0;
  for (let index = 0; index < student.length; index++) {
      sum = sum + student[index];  
  }
  console.log(sum);
  let avg = sum / student.length;
  console.log("avg of the student is: "+ avg);

  // practise question-2:
 
  
  


// MORE METHODS
  let userName = ['liza','puja','lucky','pupun'];
  let age = [23,25,15,22];
  total = userName.concat(age);
  console.log(total);
console.log(userName.includes('liza'));   //true
console.log(userName.includes('Liza'));  //false
console.log(userName.reverse());
console.log(total.reverse());

//slice(): does not change original array
console.log("==========");
let coolColors = ['red','orange','blue','golden','sky','violet','yellow','green'];
console.log(coolColors.slice(3,5));
console.log(coolColors.slice(-3));

// splice() : change original array ,it is used for add or delete items
let months = ['jan','feb','mar','apl','may'];
// remainMonth = months.splice(1,4);
console.log(months.splice(1,2,101,102));
console.log(months);


//multi dimensional array
const game = [['x','o','x'], ['o','x','o'], ['x',null, 'x']];
console.log(game);
console.log(game[2][1]);
console.log(game[1][0]);