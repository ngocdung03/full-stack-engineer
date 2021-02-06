- SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
- ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
- TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.
- More types of errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
- To learn more, go to 'error' in this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript
##### Debugging process
1. **Is your code throwing errors?** If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
2. **Is your code broken but not throwing errors?** Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
    1. Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
    2. After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
    3. Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.
3. **Did you locate the bug using steps 1 and 2, but can’t fix the bug?** Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.
