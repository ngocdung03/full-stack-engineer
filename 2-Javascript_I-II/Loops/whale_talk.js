
//1. Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

let input = 'turpentine and turtles';

//2. Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated. Note: Whales don’t consider “y” a vowel.

const vowels = ['a', 'e', 'i', 'o', 'u'];

//3. Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
let resultArray = [];

//5.To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string. Comment out this code when you’re ready to move on.
//6.Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs. This will enable you to check each letter of input against all the vowels elements during each iteration.
//7.To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
//8.Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
//9.Whales double their e‘s and the u‘s in their language.Write an if statement that checks if each letter in the input string is equal to 'e'. If so, .push() input[i] to the resultArray.Note, this statement belongs after the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
//10.Next, you want to double the letter u, so you must mimic the code from the last step. Re-create the if statement, but modify it so it pushes the letter u a second time.
for (let i=0; i < input.length; i++) {
  //console.log(input[i]);
  for (let j=0; j < vowels.length; j++) {
    // console.log(j)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === 'e') {
        resultArray.push(input[i])
      };
      if (input[i] === 'u') {
        resultArray.push(input[i])
      }
    }
  }
}
//11.At the bottom of the program, log resultArray to the console.
console.log(resultArray)

//12.Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
console.log(resultArray.join('').toUpperCase());

//13.Run the program and sing the output out loud — you officially speak whale!To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.Try other tests like 'Hi, Human' (to get IUUA) or 'a whale of a deal!' (to get 'AAEEOAEEA').