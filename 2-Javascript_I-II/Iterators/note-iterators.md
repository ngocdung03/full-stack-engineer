- In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.
- More on functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
- Access function original name: 
```
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);
//checkThatTwoPlusTwoEqualsFourAMillionTimes
```
- A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call the functions that get passed in as parameters and invoked callback functions
```
const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}
 
const addOneToOne = () => 1 + 1;
 
timeFuncRuntime(addOneToOne);
```
- The built-in JavaScript array methods that help us iterate are called *iteration methods* aka *iterators*.
- More on iterations: 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

    - https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods
- .forEach() method: execute the same code for each element of an array.
```
groceries.forEach(groceryItem => console.log(groceryItem));
```
- .map() method: takes an argument of a callback function and returns a new array - different with .forEach().
- .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it.
- .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
- .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
```
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums);
//note: if .reduce() doesn't take 2nd argument, 100, currentValue will start at second item in array (why?)
```

