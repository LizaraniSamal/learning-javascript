let num = [43,52,18,65,98];
console.log(num);
num.forEach((a,b) => {           //a,b => you can take any variable here a =number,b = index
    console.log(a);
    console.log(b);
});

//MAP METHOD      //IT IS A COLLECTION OF KEY AND VALUES
// it is same as forEach() but map() gives an new array.
//syntax: arr.map(callbackfnx(value,idx,array)).
console.log("*********");

let nums=[45,67,98];
let newArr1 = nums.map((val) => {
    return val;
});
console.log(newArr1);

let map = new Map();
map.set("liza","java");
map.set("puja",1);
map.set("lucky","android");
map.set("liza",5);


console.log(map.keys());
console.log(map.values());
console.log(map.has("chirag"));
console.log(map.has("liza"));
console.log(map.get("lucky"));
for(let[k,v] of map){
    console.log(k,":",v);
}
map.forEach((k,v) => {
    console.log(v,":",k);
})  

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
 let newNums = myNumbers.map((num) => {return num = num+10});
console.log(newNums);

// for each loop in array
console.log("****for each loop****");

// syntax: Array.forEach(callBackFunction) -> A callback is function pass as an argument to another function.

let cities = ["bbsr","ctc","rkl","bal","jjkr"];
cities.forEach((item) => {
    console.log(item);
});

let number = [1,2,3,4,5,6];
number.forEach((mynum) => {
    console.log(mynum);
    
});


// practise: In ana array print the square of each no by foreach loop.
 let arr = [1,2,3,4,5,6];
 arr.forEach((value) => {
    console.log(value*value); 
 });
 

const coding = ["js","ruby", "java", "python","cpp"];
// lambda function syntax:
// const printFunc = (item) => {
//     console.log(item);
// } 
function printFunc(item){
    console.log(item);
}
const values = coding.forEach(printFunc);
console.log(values);   //we can not print value so we use filter method



//FILTER METHODS        this method will execute when condition is true
 
const myNums = [1,2,3,4,5,6,7,8,9,10];
// let newNum = myNums.filter((number) => number>3)
// console.log(newNum);
//or
let newNum = myNums.filter((number) => {
       return number>4;
})
console.log(newNum);

console.log("%%%%%%%%%");

const books =[
    {title:'book one', genre:'fiction', publish:1981, edition:2004},
    {title:'book two', genre:'non-fiction', publish:1992, edition:2008},
    {title:'book three', genre:'history', publish:1999, edition:2007},
    {title:'book four', genre:'science', publish:1989, edition:2010},
    {title:'book five', genre:'history', publish:2009, edition:2014},
    {title:'book six', genre:'fiction', publish:1987, edition:2010},
    {title:'book seven', genre:'science', publish:2011, edition:2016},
];
console.log(books);

let userBooks = books.filter((bk) => bk.genre === 'history');
console.log(userBooks);

console.log("=====");
console.log(books.filter((bk) => {
    return bk.publish > 1999
}));

console.log("=====");

console.log(books.filter((bk) => bk.publish >= 1995 && bk.genre === "history"));

console.log("=====");

//practise question
//we are given array of marks.find out the student of marks greater than 90.
let marks = [76,89,65,34,90,79];
let newMarks = marks.filter((number) => {
    return number>90;
});
console.log(newMarks);

//chaining method

const arrValue = [1,2,3,4,5,6,7];
const newArray = arrValue.map((num) => num*10).map((num) => {return num+1}).filter((num) => num >= 40);
console.log(newArray);

console.log("$$$$$$$$$$$$");

// reduce method     //it is use of add all element in array
//perform some operations and reduce the array to a single value.it returns that single value.
const arrNum = [1,2,3];
const total = arrNum.reduce(function(acc , curValue){
   // console.log('acc: ${acc} and curValue: ${curValue}')
    return acc + curValue ; 
},0);
console.log(total);

//or

const newArr = [1,2,3,4,5];
const totalArray = newArr.reduce((acc , curValue) => acc + curValue);
console.log(totalArray);

const shoopingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "js course",
        price: 12999
    }
];
const newTotal =shoopingCart.reduce((acc,item) => acc + item.price,0);
console.log(newTotal);




console.log('++++++++');

//some method

var ages = [12,23,15,18,20];
let b = ages.some(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
console.log(b);


//EVERY METHOD 
var myAge = [12,23,15,18,20];
let check = ages.every(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
console.log(check);
