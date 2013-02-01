describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).toEqual(jasmine.any(Function));
    expect(queue.remove).toEqual(jasmine.any(Function));
    expect(queue.size).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of queue
});
