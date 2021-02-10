- **Classes** are templates for objects.
- *Contructor method*: JavaScript calls the constructor() method every time it creates a new instance of a class.
```
//By convention, we capitalize and CamelCase class names.
class Dog { 
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
- *Instance*: an object that contains the property names and methods of a class, but with unique property values.
    - we use the new keyword to create an instance of our Dog class: const halley = new Dog('Halley');

- *Class method and getter syntax*: same as it is for objects **except you can not include commas between methods**.
```
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
- *Inheritance*: you can create a *parent* class (also known as a superclass) with properties and methods that multiple *child* classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.
```
class Animal {    //parent class of `Cat` and `Dog`
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
// Extend to the subclass `Cat`
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
// In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error.

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce
//In the example above, we abandoned best practices by calling our _name property directly. 
```
  - The extends keyword makes the methods of the `animal` class available inside the `cat` class.
  - The constructor, called when you create a new `Cat` object, accepts two arguments, `name` and `usesLitter`.
  - The super keyword calls the constructor of the parent class. In this case, `super(name)` passes the name argument of the `Cat` class to the constructor of the `Animal` class. When the `Animal` constructor runs, it sets `this._name = name`; for new `Cat` instances.
  - `_usesLitter` is a new property that is unique to the `Cat` class, so we set it in the `Cat` constructor.  

- *Static methods*: a class to have methods that aren’t available in individual instances, but that you can call directly from the class.
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
//Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
```
- Understanding class, prototypes and inheritance in Javascript: 
  - https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript#constructor-functions
  - https://www.taniarascia.com/understanding-classes-in-javascript/

- More on Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes