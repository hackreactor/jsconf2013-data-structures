describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of queue
});