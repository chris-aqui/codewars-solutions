/**
 * @param {number} n
 * @return {string[]}
 */

const now = require("performance-now")
const start = now()
const end = now()

var fizzBuzz = function(n) {
  console.log("runtime Start: ",start.toFixed(3))
//     basic version with for loops
    let answer = [];
    for(let i = 1; i <= n; i++ ){
        if (i % 15 == 0 && i != 0){
            console.log("FizzBuzz");
            answer.push("FizzBuzz");
        } else if(i % 3 == 0){
            console.log("Fizz");
            answer.push("Fizz");
        } else if (i % 5 == 0){
            console.log("Buzz");
            answer.push("Buzz");
        } else {
            console.log(i.toString())
            answer.push(i.toString());
        }
    }
    console.log("runtime End: ",(start-end).toFixed(3))
    return answer;
};

fizzBuzz(15);