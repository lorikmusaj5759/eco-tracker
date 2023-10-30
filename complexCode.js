/**
 * Filename: complexCode.js
 *
 * Description: Complex JavaScript code showcasing various advanced concepts and techniques
 */

// Define a complex class with multiple private and public methods
class ComplexClass {
  constructor() {
    this.privateVariable = 'Private Variable';

    // Initialize public properties
    this.publicProperty = 'Public Property';
  }

  // Private method - only accessible within the class
  #privateMethod() {
    console.log('Private method executed');
  }

  // Public method to access private method and variable
  publicMethod() {
    console.log('Public method executed');
    this.#privateMethod();
    console.log('Accessing private variable:', this.privateVariable);
  }

  // Public method to demonstrate closures
  closureExample() {
    let counter = 0;

    function increment() {
      counter++;
      console.log('Counter:', counter);
    }

    return increment;
  }
}

// Create a complex instance of the class
const complexInstance = new ComplexClass();

// Call public methods
complexInstance.publicMethod();

// Access public property
console.log('Accessing public property:', complexInstance.publicProperty);

// Create a closure function and execute it multiple times
const closureFunc = complexInstance.closureExample();
closureFunc();
closureFunc();
closureFunc();

// Define a generator function to generate a sequence
function* sequenceGenerator() {
  let n = 1;

  while (true) {
    yield n++;
  }
}

// Create a sequence generator instance
const sequence = sequenceGenerator();

// Generate and log the next 10 values from the sequence
for (let i = 0; i < 10; i++) {
  console.log('Next value from sequence:', sequence.next().value);
}

// Demonstrate async-await functionality
function asyncOperation(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async operation completed');
    }, ms);
  });
}

async function asyncExample() {
  console.log('Before async operation');
  const result = await asyncOperation(2000);
  console.log(result);
  console.log('After async operation');
}

asyncExample();

// Implement a recursive factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// Demonstrate array manipulation methods
const array = [1, 2, 3, 4, 5];
const mappedArray = array.map((num) => num * 2);
const filteredArray = mappedArray.filter((num) => num > 5);
const sum = filteredArray.reduce((acc, curr) => acc + curr, 0);

console.log('Mapped Array:', mappedArray);
console.log('Filtered Array:', filteredArray);
console.log('Sum:', sum);

// Advanced code with more complex algorithms and logic can be added here...

// ...

// Example of complex code ends.