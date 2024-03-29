function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
  function bubbleSortBasic(array) {
    for(var i = 0; i < array.length; i++) {
      for(var j = 1; j < array.length; j++) {
        if(array[j - 1] > array[j]) {
          swap(array, j - 1, j);
        }
      }
    }
    return array;
  }