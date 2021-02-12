//2.Each of the six functions within messageMixer.js manipulates a string of text in some way, and the displayMessage() function outputs a manipulated message to the console.
//Segment the text-transformation behavior that should be kept within the module messageMixer.js, and the output behavior that should exist within message.js.
//Copy the displayMessage() function and the displayMessage() function call and paste it in message.js. Then delete the displayMessage() function from messageMixer.js.
//7.Import the module in message.js using the require() statement. You can use the variable MessageMixer again to represent the module.
//When you run message.js, you will still get a ReferenceError.
//const MessageMixer = require('./messageMixer.js');

//12.In message.js, use the import keyword to import the MessageMixer module. The file path will be './messageMixer'.
// import MessageMixer from './messageMixer';

//16.In message.js, modify the program to import each of the variables.
import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord,
reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin} from './messageMixer';

//17.As a last and final step, modify each of the functions within each of the displayMessage() function so that they use only the variable name in the function call.
function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", 'a'));
}

displayMessage();

//8.In order for message.js to display the output from the module, you’ll need to call each of the functions in the displayMessage() function as properties of the imported MessageMixer object.
//When you run the file, you should see the output of the functions.