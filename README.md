In this assignment, we'll implement and test a stack:

## Requirements
- Implement a **stack** class
- Throughly test the functionality of your stack.

## Tasks

- [ ] **Run the (mostly empty) test suite**
    - This repo contains a mostly empty Mocha test suite.  To run it, open up `SpecRunner.html`.

- [ ] **Refactor your stack to use the following methods of instantiation:**
    1. [x] **Functional instantiation**: a simple "maker" pattern (This is already done!)
        - *Do:*
            - Work within the `src/functional/` folder.
            - Define all functions and properties within the maker function.
        - *Don't:*
            - Use the keyword `new`, the keyword `this`, or any `prototype` chains.
            - Capitalize the maker function name.
        - *Example*: The provided class `makeStack` already follow this pattern
    2. [ ] **Functional instantiation with shared methods**: same as step 1, but with shared methods
        - *Do:*
            - Work within the `src/functional-shared/` folder.
            - Create an object that holds the methods that will be shared by all instances of the class.
            - You'll need to use the keyword `this` in your methods.
            - Use [`_.extend`][_.extend] to copy the methods onto the instance.
        - *Don't:*
            - Use the keyword `new` or `prototype` chains
        - *Example*: [functional instantiation example]
    3. [ ] **Prototypal instantiation**: using `Object.create`
        - *Do:*
            - Work within the `src/protoypal/` folder.
            - Use [`Object.create`][Object.create] with the object from step 2 to create instances of your class
        - *Don't:*
            - Use the keyword `new`
        - *Example:* [prototypal instantiation example]
    4. [ ] **Pseudoclassical instantiation**: create instances with the keyword `new`
        - *Do:*
            - Work within the `src/pseudoclassical/` folder.
            - Capitalize your function name to indicate that it is intended to be run with the keyword `new`
            - Use the keyword `new` when instantiating your class
            - Use the keyword `this` in your constructor
        - *Don't:*
            - Declare the instance explicitly
            - Return the instance explicitly
        - *Example:* [pseudoclassical instantiation example]

## Extra credit

- [ ] **Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.**
  - [ ] Create a profiling test case in each of your test suites.  It should instantiate and use a large number of stacks.
  - [ ] Comment out all but one test suite.  Record the results of the profiler.  Repeat for each step of the refactor.
  - [ ] Write a brief analysis of your results.

[functional instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js
[prototypal instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js
[pseudoclassical instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

[stack]: http://en.wikipedia.org/wiki/Stack_(abstract_data_type)
[Array]: http://mdn.io/Array
[Array methods]: http://mdn.io/Array#Methods_of_Array_instances
[Object.create]: http://mdn.io/Object.create
[_.extend]: http://underscorejs.org/#extend
[Chrome profiling tools]: https://developers.google.com/chrome-developer-tools/docs/profiles



Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.
