function selectionSort(arr) {
  // type your code here
  let sorted = [];
  const iterations = arr.length
  for (let index = 0; index < iterations; index ++) {
    let lowest = Math.min(...arr);
    let indexOfLowest = arr.indexOf(lowest);
    
    sorted.push(lowest);
    arr.splice(indexOfLowest, 1);
  }
  return sorted
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/**
 * given an array of length n
 * sort through the array to find the lowest value
 * move that value to the first index of the array
 * repeat with array of length n-1 starting at index 1
 * return sorted array
 */
// And a written explanation of your solution
/**
 * selection sort works by taking the lowest value and putting it at the beginning of the array
 * then repeating until the array is sorted
 * it sorts in place, but is slow compared to optimized sorts like timsort or quicksort
 */
