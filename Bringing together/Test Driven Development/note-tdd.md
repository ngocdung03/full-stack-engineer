- Ref - Software errors costs: https://web.archive.org/web/20090610052743/http://www.nist.gov/public_affairs/releases/n02-10.htm
- How do we hunt for bugs? https://discuss.codecademy.com/t/how-do-we-hunt-for-bugs/386978
- *Manual testing* is a form of testing done by a human interacting with a system. With web apps, this might be clicking, dragging, and typing through a webpage. A list of actions and expected behaviors would be given. If the observed behavior doesn’t match the expected behavior, the application has an error.
    Example: Manually test the web app by following the list provided:
    - Behavior 1: Run npm start in the terminal and reload the page. Scroll down and expect the webpage to start with a blank order.
    - Behavior 2: Type a name and click “Place Order”. Scroll down and expect “Deliver to:” to display the submitted name.
    - Behavior 3: A blank name will not overwrite the existing name.
    - Behavior 4: Select a cake type and place the order. Expect “Cake” to display the selected cake type.
    - Behavior 5: Check some fillings. Expect “Fillings” to display your selected fillings.
    - Behavior 6: Choose a stack size. Expect “Pancake Count:” to display the number equivalent to the stack size, e.g. “Double” is “2”.
- *Automated test suite*:  is the use of software to control the execution of tests and the comparison of actual behavior to expected behavior. The cost of testing can be reduced and the quality can be improved.
    1. Write code and corresponding tests
    2. Enter a command into a terminal to run tests
    3. If the app behaves as intended, all tests should pass. Development is complete.
    4. If it does not behave as intended, at least one test should fail. Fix code and return to step 2.
- The code defining your app as implementation code, and the code defining your tests as test code.
- Test code is included with and structured similarly to implementation code. Often times changes to test code are associated with changes to implementation code and vice versa. Both are easier to maintain when they are stored in the same place.
- Imagine explaining your app to someone else. How does it behave? Does it rely on other software? How do you run it on a computer? You could read every line in every file to figure that out. Or you could read the *documentation*.
- When adding a new feature to your product, it’s possible that something will break. If that break occurs within a feature developed earlier, it is called *regression*. When functionality previously developed and tested stops working, you may say the *functionality regressed*.
