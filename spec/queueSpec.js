describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    queue = Queue();
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).toEqual(jasmine.any(Function));
    expect(queue.remove).toEqual(jasmine.any(Function));
    expect(queue.size).toEqual(jasmine.any(Function));
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(queue.add.length).toEqual(1);
    });
  });

  // Hey! Add more tests here to test the functionality of queue
});
