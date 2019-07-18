describe('Split Array function', function() {
    it('is able to split an array into two halves (EXTREME CASES)', function() {
      // your code here 
      expect(split([])).toEqual([[], []]);
      expect(split([1])).toEqual([[], [1]])
    });
    it('is able to split an array into two halves (NORMAL CASES)', function() {
        // your code here 
        expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
        expect(split([1,2,3])).toEqual([[1], [2,3]])
      });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array (Edge)', function(){
      // test the merging algorithm
      expect(merge([[],[]])).toEqual([]);
      expect(merge([[],[1]])).toEqual([1]);
      expect(merge([[1],[]])).toEqual([1]);
    });
    it('is able to merge two sorted arrays into one sorted array (Normal)', function(){
        // test the merging algorithm
        expect(merge([[1],[1]])).toEqual([1,1]);
        expect(merge([[1,2],[3]])).toEqual([1,2,3]);
        expect(merge([[1],[2,3]])).toEqual([1,2,3]);
        expect(merge([[2],[1,3]])).toEqual([1,2,3]);
        expect(merge([[1,5,6],[7,7]])).toEqual([1,5,6,7,7]);
      });
  });

  describe('MergeSort function', function(){
    it('is able to mergeSort (Edge)', function(){
      // test the merging algorithm
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([1])).toEqual([1]);
    });
    it('is able to mergesort (Normal)', function(){
        // test the merging algorithm
        expect(mergeSort([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
        expect(mergeSort([6,8,3,4,100])).toEqual([3,4,6,8,100]);
        expect(mergeSort([2,9,3,5,6,10])).toEqual([2,3,5,6,9,10]);
       
      });
  });