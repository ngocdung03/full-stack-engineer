//1.In the code editor, you have a file messageMixer.js. Run the file to see the output of the program.
//3. You can now turn the behavior of messageMixer.js into a module. In this file, create a variable MessageMixer and set it equal to an empty object to represent the module as an object.
//4.You’ve defined a MessageMixer object, but in order for you to attach behavior to it, you’ll need to make sure that each function is accessible as a property of it.
//One by one, for each function in messageMixer.js, modify the function so that it is a property on the object.
//5.In addition to to setting each function as a property on the MessageMixer object, notice that several functions depend on another function to be called.
//The reverseAllWords() function, for instance, calls the reverseWord() in its function body. In order for this function to work, reverseWord() must be prepended by MessageMixer..
//The encode() function works in a similar way, when it calls replaceAllOccurrences(). Both need to be prepended by the module name.
//Refactor the reverseAllWords() and encode() functions so they use MessageMixer on function calls within the function.
const MessageMixer = {};

const countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

const capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};

const reverseWord = function(word) {
  return word.split("").reverse().join("");
};

const reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};

const replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

const replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

const encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

//6.Your MessageMixer object now has properties. Export it using module.exports syntax.
//module.exports = MessageMixer;

//9.Continue by adding a few additional functions to the MessageMixer module.
//In messageMixer.js, create a function on the MessageMixer object called palindrome() that takes a String str as a parameter.
//The body of the function should use string concatenation or interpolation to return the string, a space, and the reverse of the string. You can use the reverseWord() function. You will need to call reverseWord() as a method of MessageMixer.
const palindrome = function(str) {return `${str} ${reverseWord(str)}`;};

//10.Again, in messageMixer.js, create another function pigLatin() on the MessageMixer object that takes a sentence and a character as parameters.
//The body of the function should return the sentence split at each of the spaces, and joined back together using the character argument concatenated with a ' '.
const pigLatin = function(sentence, character) {return sentence.split(' ').join(character+' '); };

//11.In messageMixer.js, use modify the way you export MessageMixer to use export default instead of. module.exports.
//export default MessageMixer;

//14.Message Mixer wants to test one final behavior for their program. They’d like to export each of the functions as a variable. Modify messageMixer.js so that each function is exported as a variable name.
//Note that as you do this, you should also remove the MessageMixer object in front of each function, as well at any reference to MessageMixer in the body of the reverseAllWords(), encode(), and palindrome() functions.
//15.Using the export statement at the bottom of the file, export each of the function by their variable named between two {}
export {countCharacter, capitalizeFirstCharacterOfWords, reverseWord,
reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin};