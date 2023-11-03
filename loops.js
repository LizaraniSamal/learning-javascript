//for loop
for (let i = 1; i <=10; i++) {
    console.log(i);
}
console.log("helloworld");
for(let i=0; i<=20 ; i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("======");
for(let i=100 ; i>=0 ; i-=10){
    console.log(i);
}

console.log("============");
let animal = ['lions', 'tigers','bears'];
for(let i = 0;i< animal.length; i++){
    console.log(i,animal[i]);
}

//NESTED LOOP
for(let i = 1; i<=10 ; i++){
    console.log("value of i is: ",i);
    for(let j = 1; j<4 ; j++){
        console.log("    j is:",j);
    }
}

console.log("==============");
const seatingChart = [
    ['liza','puja','lucky'],
    ['rahul','pupun','pari'],
    ['sita','gita','ram','rahim']
];
for(let i = 0; i < seatingChart.length ; i++){ 
    const row = seatingChart[i];
    console.log(seatingChart[i]);
    for(let j = 0; j < row.length ; j++){
        console.log(row[j]);
    }
}

// WHILE LOOP
let count = 0;
while(count < 10){
    console.log(count);
    count++;
}
console.log("==========");
let i = 0;
while(i<10){
    console.log(i);
    i++;
    if(i ==5){
        break;
    }
}

//FOR .... OF
let books = ['a','b','c','d','e','f'];
for(let find of books){
    console.log(find);
}
for(let char of "hello world"){
    console.log(char);
}

console.log("=========");
//iterating over object
const testScore = {
    liza : 60,
    puja : 70,
    lucky : 75,
    pari : 45,
    pupun : 98,
    rahul : 78,
    hari : 87,
    gita : 70
};
for(let person in testScore){
    console.log(person , testScore[person]);
}

for(let score of Object.values(testScore)){
    console.log(score);
}
for(let score of Object.keys(testScore)){
    console.log(score);
}
for(let score of Object.entries(testScore)){
    console.log(score);
}

let sum = 0;
for(let score of Object.values(testScore)){
    sum += score;
}
console.log(sum);
