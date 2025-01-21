const prompt = require('prompt-sync')();
function print(...str) {
    console.log(...str);
}
// function add(num1 ,num2) {
//     return num1 + num2
// }
const sub = (num1, num2) => num1 - num2;
// print(sub(10, 5));

let fruits = ["mango", "apple", "banana"];
// for (let i = 0; i < fruit.length; i++){
//     print(fruit[i]);
// }


// for (let i in fruit) { print(fruit[i]); }

// for (let fruit of fruits) {
//     print(fruit);
// }



// print(fruit[0]);
// print("Hello")








let objStd = [
    {
        id: 43489,
        fname: "Pattamaraj",
        lname: "Booranawanich"
    },
    {
        id: 43490,
        fname: "Pattama",
        lname: "Boorana"
    },
    {
        id: 43491,
        fname: "Pat",
        lname: "Boo"
    }
]
print(objStd[1].id)