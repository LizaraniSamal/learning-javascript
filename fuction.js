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

function repeat('str' ,numTimes) {
    let result = '';
    for(let i = 0; i < numTimes ; i++ ){
        result = result + str
    }
    console.log(result);
}

