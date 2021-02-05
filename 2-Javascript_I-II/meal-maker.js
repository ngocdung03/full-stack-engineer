//1.Start by creating an empty menu object.
//2.Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.
//3.Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.
//4.Create getter and setter methods for the appetizers, mains, and desserts properties.
//5.Inside your menu object, create an empty getter method for the _courses property.
//6.Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
//7.Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu. The method should take in three parameters: the courseName, the dishName , and the dishPrice.
//8.The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters. The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
//9.Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal. Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.

// 10.There are a few steps in getting the .getRandomDishFromCourse() to work.
// a.Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
// b.Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
// c.Round that generated number to a whole number by using Math.floor() on the result.
// d.Return the dish located at that index in dishes.

// 11.Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
// a.The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
// b.Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
// c.Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.
menu = {
  _courses: {
    _appetizers: [],  //error when doesn't include _
    _mains: [],
    _desserts: [],
    get appetizers() {  //4
    return this._appetizers; //error when include _course
    },
    set appetizers(dish) {
    this._appetizers = dish;  //equivalent to this._courses.appetizers
    },
    get mains() {
    return this._mains;
    },
    set mains(dish) {
    this._mains = dish;
    },
    get desserts() {
    return this._desserts;
    },
    set desserts(dish) {
    this._desserts = dish;
    },   
  },
  get courses() {  //5-6
    return {
      appetizers: this.appetizers, //this uses the appetizer getter method
      mains: this.mains,
      desserts: this.desserts
      };
  },
  addDishToCourse(courseName, dishName, dishPrice) {   //7-8
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //courseName.push(dish)   error
    return this._courses[courseName].push(dish);  //error if doesn't use brackets
  },
  getRandomDishFromCourse(courseName) { //9-10
  const dishes = this._courses[courseName]; 
  const index = Math.floor(Math.random()*dishes.length);
  return dishes[index];
  },
  generateRandomMeal() { //11
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Total price of ${appetizer.name}, ${main.name}, and ${dessert.name} is ${totalPrice}.`;
  }
};

//12.Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
menu.addDishToCourse('appetizers', 'soup', 10);
menu.addDishToCourse('appetizers', 'salad', 15);
menu.addDishToCourse('appetizers', 'stewed veggies', 15);

menu.addDishToCourse('mains', 'rice', 13);
menu.addDishToCourse('mains', 'noodle', 14);
menu.addDishToCourse('mains', 'grilled', 17);

menu.addDishToCourse('desserts', 'cake', 8);
menu.addDishToCourse('desserts', 'pudding', 10);
menu.addDishToCourse('desserts', 'fruit', 12);
//13.Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.
const meal = menu.generateRandomMeal();
console.log(meal);