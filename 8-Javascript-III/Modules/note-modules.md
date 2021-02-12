- **Module**: reusable pieces of code that can be exported from one program and imported for use in another program.
- Advantages: 
    - find, fix, and debug code more easily;
    - reuse and recycle defined logic in different parts of our application;
    - keep information private and protected from other modules;
    - importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
- Define and export a module:
```
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
 
module.exports = Menu;
//Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
```
- `require()`: import modules
```
const Menu = require('./menu.js');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();
```
- *default export*: 
```
let Menu = {};
 
export default Menu;
```
- When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features, it is common to transpile code since ES6 is not supported by all browsers.
- *import*: ES6 module syntax also introduces the import keyword for importing objects.
```
import Menu from './menu';   //without the extension of the file
```
- Eg: use the module Airplane to display the fuel capacity of both our airplanes.
```
let Airplane = {};
Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
  }
];
export default Airplane;

-------
import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
});
};
  
displayFuelCapacity();
```
- *named exports* allow us to export data through the use of variables.
    - Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
    - specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
    - export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
    - specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified in the export syntax.
```
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
 
export { specialty, isVegetarian };
```
- *named imports*: 
```
import { specialty, isVegetarian } from './menu';
 
console.log(specialty);
//We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty
```

- Export *Named Exports*:
```
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
```
- Import *Named Imports*: exporting upon declaration does not have an impact on how we import the variables.

- *Export as*: Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the `as` keyword.
```
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 
 
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```
- *Import as*:
```
// using aliases is to import the entire module
import * as Carte from './menu';
 
Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 
```

- Combining export Statements: it is useful on occasion. For example, if you suspect developers may only be interested in importing a specific function and won’t need to import the entire default export.
```
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};
 
export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
```

- Combining Import Statements:
```
import { specialty, isVegetarian, isLowSodium } from './menu';
 
import GlutenFree from './menu';
```
- More on Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- Learn about CJS, AMD, UMD, ESM: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm