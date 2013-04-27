describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(queue.add.length).to.equal(1);
    });
  });

  // Hey! Add more tests here to test the functionality of queue
});
