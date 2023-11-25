let arr = [10, 11, 12, 13, 17, 18];
console.log(arr);

//forEach loop : it is used for iterating over an array.it has no return type.
arr.forEach((item) => {
  //console.log(item);
});

//map() : it used to modify the array and the return type is array.
arr = arr.map((item) => {
  //    console.log(item+1);
  return item * 2;
});
console.log(arr);

//shortcut way to use array method if we have only one statement in callback method
// const arr2 = arr.map((item) => item+2);
// console.log(arr2);

//JSON : javascript object notation

// let std1 = {"id":100 , "name":"liza"}

const stdArr = [
  { id: 100, name: "liza" },
  { id: 101, name: "manas" },
  { id: 102, name: "sita" },
  { id: 103, name: "gita" },
  { id: 104, name: "ram" }
];
