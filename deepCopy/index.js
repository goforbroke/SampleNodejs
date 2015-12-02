(function() {
  function main() {
    // Array
    var originalArray  = [1, 2, 3];
    var cloneArray = originalArray.slice(originalArray); 
    cloneArray.push(4);
    console.log('original', originalArray);
    console.log('clone', cloneArray);
  }
  main();
})();
