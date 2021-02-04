- Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:
- We can use dot notation to access keys of string without special characters/numbers: `object.key`
- We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them: `object.['key1']`
-  With bracket notation you can also use a variable inside the brackets to select the keys of an object. 
```
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

//If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.
```
- Methods: With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
```
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
```
- The object that a method belongs to is called the *calling object*.
- Chain operators to access nested properties:
```
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```
- Add methods to our object literals using key-value syntax with anonymous function expressions 
- Objects are passed by reference:
```
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'

// reassignment by this way wouldn’t work if spaceship doesn't contain .color
// can change key properties but cannot reassign the object by this way
```

- Looping through objects: pay attention to when using the brackets []
```
for (let member in spaceship.crew) {
  console.log(`${spaceship.crew[member].name} : ${spaceship.crew[member].degree}`)
};
```
- Inside the scope of the `.diet()` method, we don’t automatically have access to other properties of the `goat` object -> can use `this`: (equivalent to . in R?)
```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
```
- Avoid using arrow functions when using `this` in a method!
- Privacy in objects: only certain properties should be mutable or able to change in value. The usage of '_' before a property name means that the original developer did not intend for that property to be directly changed.
```
const bankAccount = {
  _amount: 1000           
}
//`_amount` is not intended to be directly manipulated
//Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000;
```
- `getters` are methods that get and return the internal properties of an object:
```
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: do not need to be called with a set of parentheses.
person.fullName; // 'John Doe'
```
- `setter` methods: reassign values of existing properties within an object.
```
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40
console.log(person._age);
//Setter methods do not need to be called with a set of parentheses
```
- Factory function: function that returns an object and can be reused to make multiple object instances.
```
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
```
- Property value shorthand: ES6 introduced some new shortcuts for assigning properties to variables known as *destructuring*.
```
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```
- Destructured Assignment: create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object.
```
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const { residence } = vampire;  //equivalent to const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'
```
- Built-in methods for Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
