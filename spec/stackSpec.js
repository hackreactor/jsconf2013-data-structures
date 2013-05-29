describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.add.length).to.equal(1);
    });
    it('should add something to the stack', function() {
      expect(stack.size()).to.equal(0);
      stack.add('element');
      expect(stack.size()).to.equal(1);
    });
  });

  describe('#remove()', function() {
    it('should remove an element', function() {
      stack.add('element');
      stack.remove();
      expect(stack.size()).to.equal(0);
    });
  });

});
