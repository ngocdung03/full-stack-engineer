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
