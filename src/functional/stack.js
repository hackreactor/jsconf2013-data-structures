var makeStack = function(){
  var storage = {};

  var size = 0;

  var stack = {};

  stack.add = function(value){
    storage[size] = value;
    size++;
  };

  stack.remove = function(){
    return storage[size--];
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
