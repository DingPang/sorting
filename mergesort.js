function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const middle = Math.floor(wholeArray.length/2);
    const firstHalf = wholeArray.slice(0,middle);
    const secondHalf = wholeArray.slice(middle, wholeArray.length)
    return [firstHalf, secondHalf];
  }

function merge(array) {
    /* your code here */
    const result = [];
    const firstArray = array[0];
    const secondArray =array[1];
    
    while(firstArray.length&& secondArray.length){
        if (firstArray[0]<secondArray[0]){
            result.push(firstArray[0]);
            firstArray.shift()
        } else{
            result.push(secondArray[0]);
            secondArray.shift()
        }
    }
    return result.concat(firstArray).concat(secondArray);
  }

  function mergeSort(array) {
    
    if (array.length <= 1){
        return array
    }else{
        array = split(array)
        return merge([mergeSort(array[0]),mergeSort(array[1])])
    }
  
  }
  