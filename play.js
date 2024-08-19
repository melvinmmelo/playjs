let name = "John"; // declaring and assignment of variable
let age = 25;
let hasHobby = true;
let hobbies = ["Reading", "Coding", "Gaming"]; // this an array

// accessing array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);


// looping through array
// method 1
for (let hobby of hobbies) {
  console.log(hobby);
}

// method 2
hobbies.map((hobby) => {
  console.log(hobby);
});

// method 3
hobbies.forEach((hobby) => {
  console.log(hobby);
});

// this is an object
const person = {
  name: "Jonn", // key: pair = value
  age: 25,
  greet: function(){
    console.log("Hello, I am " + this.name);
  }
};

// accessing object properties
console.log(person.greet());

// this is a function with 3 parameters/arguments
function summarizeUser(userName, userAge, userHasHobby){
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    );
}

function add(number1, number2){
  // let sum = number1 + number2;
  // return sum;
  return number1 + number2;
}

function isStudentPassed(score){
  if(score > 75){
    return "Passed";
  }else{
    return "Failed";
  }
}

// console.log(summarizeUser(name, age, hasHobby));
// console.log(summarizeUser("Jane", 30, true));
// console.log(add(1, 2));
// console.log(isStudentPassed(70));



// if(age > 18){
//     console.log("You are an adult!");
// }else if(age > 60){
//     console.log("You are a senior!");
// }else{
//     console.log("You are a minor!");
// }

// const fullName = "John Doe";

// console.log(name);