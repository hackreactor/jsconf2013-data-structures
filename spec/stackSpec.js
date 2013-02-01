describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of stack
});
