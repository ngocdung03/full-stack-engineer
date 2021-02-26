- An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete
- Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:
    - Pending: The initial state— the operation has not completed yet.
    - Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
    - Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
- Create a new promise:
```
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```
- When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.
    - resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
    - reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
- Node setTimeout(): Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation.
- Consume promise: `.then()` is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. 
    - The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
    - The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
    - One important feature of .then() is that it always returns a promise. 
- `checkInventory(order).then(handleSuccess, handleFailure);`
- *Separation of concerns*: Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.
```
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
//To create even more readable code, we can use a different promise function: .catch() for failure handler.
```
- Process of chaining promises together is called *composition*:
```
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```
- Common Mistakes:
    1. Nesting promises instead of chaining them.
    ```
    returnsFirstPromise()
    .then((firstResolveVal) => {
        return returnsSecondValue(firstResolveVal)
            .then((secondResolveVal) => {
                console.log(secondResolveVal);
            })
    })
    ```
    2. Forgetting to return a promise.
    ```
    returnsFirstPromise()
    .then((firstResolveVal) => {
      returnsSecondValue(firstResolveVal) 
    })
    .then((someVal) => {
      console.log(someVal);
    })
    //Inside the success handler, we create our second promise, but we forget to return it!
    //We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!
    ```
- 