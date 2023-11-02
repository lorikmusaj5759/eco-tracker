/* 
  Filename: sophisticated_code.js
  Description: A sophisticated, elaborate, and complex code example 
*/

// Define a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  increaseAge() {
    this.age++;
    console.log(`I just turned ${this.age} years old!`);
  }
}

// Instantiate objects based on the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

// Call methods on the objects
person1.sayHello();
person2.sayHello();
person1.increaseAge();
person2.increaseAge();

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers from the array using arrow function
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Map each number to its square using arrow function
const squaredNumbers = numbers.map((number) => number * number);

// Reduce the array into a single value using arrow function
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("Even Numbers:", evenNumbers);
console.log("Squared Numbers:", squaredNumbers);
console.log("Sum:", sum);

// Create a Promise that resolves after a delay
const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

// Use async/await to handle the asynchronous operation
async function performAsyncOperation() {
  try {
    const result = await delayedPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

performAsyncOperation();

// Define a recursive function to calculate the factorial of a number
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log("Factorial of 5:", factorial(5));

// Generate Fibonacci sequence up to a certain limit
const fibonacciSequence = (limit) => {
  const sequence = [0, 1];
  let i = 2;
  
  while (true) {
    const num = sequence[i - 1] + sequence[i - 2];
    if (num > limit) {
      break;
    }
    sequence.push(num);
    i++;
  }
  
  return sequence;
};

console.log("Fibonacci Sequence (limit: 100):", fibonacciSequence(100));

// Implement a stack data structure using a class
class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(item) {
    this.stack.push(item);
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
  
  isEmpty() {
    return this.stack.length === 0;
  }
}

// Use the stack to reverse a string
const reverseString = (string) => {
  const stack = new Stack();
  let reversedString = "";
  
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }
  
  return reversedString;
};

console.log("Reverse String:", reverseString("Hello, World!"));

// Generate an object with properties and methods
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  modulus: (a, b) => a % b,
};

console.log("Calculator:");
console.log("2 + 3 =", calculator.add(2, 3));
console.log("5 - 1 =", calculator.subtract(5, 1));
console.log("4 * 6 =", calculator.multiply(4, 6));
console.log("10 / 2 =", calculator.divide(10, 2));
console.log("15 % 7 =", calculator.modulus(15, 7));

// Generate a random number between a range
const randomBetweenRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("Random Number between 1 and 10:", randomBetweenRange(1, 10));

// Create a timer that logs the elapsed time in seconds
const timer = {
  startTime: null,
  start: function() {
    this.startTime = new Date().getTime();
  },
  stop: function() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - this.startTime) / 1000;
    console.log("Elapsed Time (seconds):", elapsedTime);
  }
};

timer.start();

// Simulate a heavy computation
for (let i = 0; i < 1000000000; i++) {
  // Performing some calculation
}

timer.stop();