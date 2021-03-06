// 
(function() {
  var typeA       = {'type' : 'a'};
  var typeB       = {'type' : 'b'};
  var generateByA = [];
  var generateByB = [];

  generateByA = [1, 2, 3].map(cb, typeA);
  generateByB = [1, 2, 3].map(cb, typeB);
  console.log(generateByA); // => [2, 4, 6]
  console.log(generateByB); // => [1, 4, 9]

  function cb(value, index, array) {
    switch(this.type) {
    case 'a':
      console.log('type:a index:', index);
      return value + value; 
    case 'b':
      console.log('type:b index:', index);
      return value * value;
    default:
      console.log('default');
    }
  }
})();
