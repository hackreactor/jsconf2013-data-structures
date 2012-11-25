describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of stack
});