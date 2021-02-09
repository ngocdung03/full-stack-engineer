class Media {
    constructor(title) {
      this._title = title;
      this._isCheckOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckOut() {
      return this._isCheckOut;
    }
    //Solution
    set isCheckOut(TF) {
      this._isCheckOut(TF);
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      let ratingsAverage = ratingsSum/this._ratings.length;
      return ratingsAverage;
    }
    toggleCheckOutStatus() {
      this._isCheckOut = !this._isCheckOut;
    }
    addRating(rating) {
      this._ratings.push(rating)
    }
  };
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
    return this._pages;
    }
  };
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  };
  
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  };
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
  //16.Call .toggleCheckOutStatus() on the historyOfEverything instance.
  historyOfEverything.toggleCheckOutStatus();
  //17.Log the value saved to the isCheckedOut property in the historyOfEverything instance.
  console.log(historyOfEverything.isCheckOut);
  //18.Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  //19.Call .getAverageRating() on historyOfEverything. Log the result to the console.
  console.log(historyOfEverything.getAverageRating())
  
  //20.Create a Movie instance 
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  //21.Call .toggleCheckOutStatus() on the speed instance.
  speed.toggleCheckOutStatus();
  
  //22.Log the value saved to the isCheckedOut property in the speed instance.
  console.log(speed.isCheckOut);
  
  //23. Call .addRating() three times on speed with inputs of 1, 1, and 5.
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  //24.Call .getAverageRating() on speed. Log the result to the console.
  console.log(speed.getAverageRating());
  