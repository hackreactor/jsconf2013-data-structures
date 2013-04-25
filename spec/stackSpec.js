describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    stack = makeStack();
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.add.length).toEqual(1);
    });
  });

  // Hey! Add more tests here to test the functionality of stack
});
