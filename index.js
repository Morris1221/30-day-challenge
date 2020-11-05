//console.log(`hello`);
//console.log(`hello`);
//alert(`yo`);
//alert(`katsu`);
// variables
//var b = `smoothie`; 
//console.log(`b`);

//var number = `36`
//console.log(`number`)

 //   var age = prompt(`What is your age?`);
 //   document.getElementById(`someText`).innerHTML = age;

    //number in javascript
/*
    var nam = 3;
    nam = nam + 1;
    console.log(nam * 2 );

    document.getElementById(`someText`).innerHTML = nam ;
*/

/* Functions
1. create a function
2. Call the function

    function fun(){
        alert(`this is function`);
    }

    // Call
    fun();
*/
/*  
function say(yourName){
var hello = (`Hello World `+ yourName);

console.log(hello);
document.getElementById(`someText`).innerHTML = hello; 

}

var name = prompt(`What's your name?`);
say(name);
*/
/*
function sumnum(num1, num2){
    var result = num1 + num2;
    console.log(`You are `+result + ` years old`);
}
 sumnum(36,0);

 //While loops
  var num = 0;
  while(num <= 100){
      num +=1;
      console.log(num);
  }

*/

//For roop
/*
for (let num = 0; num <= 100; num++){
    console.log(num);
}
*/


// Date types

 let yourAge = 36; // number
 let yourName = `Morris`; // string
 let name = {first: `Katsu`, last: `Mori`}; //object
 let truth = false; //boolean
 let groceries = [`apple`, `banana`, `orange`]; //array
 let nothing = null;// value null

 // Strings in Javascript
 let fruit = `bananaaaa`;
 let moreFruit = `bananaapple`;
 console.log(fruit.length);
 console.log(fruit.indexOf(`na`));
 console.log(fruit.slice(0, 1));
 console.log(fruit.replace(`a`, `1`));
 console.log(fruit.toLowerCase());
 console.log(fruit.toUpperCase());
 console.log(fruit[2]);
 console.log(fruit.split(``)); // Split by charactor
 

 // Array
let fruits = [`vanana`,`apple`, `o000000`, `pineapples`];
fruits = new Array (`vanana`,`apple`, `orange`, `pineapples`);
alert(fruits[2]);

fruits[0] = `pear`;
console.log(fruits);

for (let i = 0; i < fruits.length; i++)
console.log(fruits[i]);

// array common methods
console.log(`to string`,fruits.toString());
console.log(fruits.join(` * `));
console.log(fruits.push(`peach `));
console.log(fruits, fruits.pop());
console.log(fruits.push(`blueberry`));
console.log(fruits.push(` tomato `));
console.log(fruits);    
fruits.unshift(`kiwi`);
console.log(fruits);


let vegetables =[`asparagus`, ` broccolli`]
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

let someNumbers = [5, 12, 222, 34, 1, 2, 3 ,50]
console.log(someNumbers.sort(function(a,b){return a-b}));


let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
        emptyArray.push(num);
//    console.log(num);
}
console.log(emptyArray);


// Objects in Jacascript
let student = {
    first: `Morris`,
    last: `Katsunori`,
    age: 36,
    height:176,
    studentInfo: function(){
            return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first =`notMorris` // change valu
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


// conditionals, Control flow ( if else)
// && and , || or
var age = 45;
if ((age >= 18) &&(age <=35) ){
    status = `target demo`;
    console.log(status);
} else {
    status = `not my audience`;
    console.log(status);
}

// Switch statement
// different between weekday vs. weekend
// day 0 --> Sunday
// day 6 --> Saturday -->
// day 4 --> Thursday --> weekday

switch(1){
    case 0:
        text = `Sunday`;
        break;
    case 1:
        text = `Monday`;
        break;
    case 2:
        text = `Tuesday`;
        break;
    case 3:
        text = `Wednesday`;
        break;        
    case 4:
        text = `Thursday`;
        break;
    case 5:
        text = `Friday`;
        break;
    case 6:
        text = `Saturday`;
        break;  
    default:
        text = `-`;
} 

console.log(text);
