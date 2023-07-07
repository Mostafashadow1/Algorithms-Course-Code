/**
 * @desc Factorial Number => Recursion
 * @param {n} number
 * @returns Factorial of number
 * @analysis // Time Complexity : O(n)

 */
function factorilalR(n) {
  // Base Case
  if (n < 2) return 1;
  // Recursive Case
  return n * factorilalR(n - 1);
}
factorilalR(5); // output 120
// ----------------------------------------
//* Search Algorithms
/**
 * @desc Search Number => Linear Search Algorithm
 * @param {numbers} array
 * @param {n} search number
 * @returns if number is found return index else return -1
 * @analysis // Time Complexity : O(n)
 */
function linearSearch(numbers, n) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === n) return i;
  }
  return -1;
}
console.log(linearSearch([1, 4, 6, 8, 9, 2], 2)); // output 5

/**
 * @desc Search Number => binary Search Algorithm
 * @param {arr} sortedArray
 * @param {n} search number
 * @returns if number is found return index
 * @analysis // Time Complexity : O(log n)
 */
function binarySearch(arr, n) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] === n) return midIdx;
    if (arr[midIdx] > n) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
}
console.log(binarySearch([1, 2, 4, 6, 8], 4)); // output 2

// ----------------------------------------
//* Sorting Algorithms
/**
 * @desc sorting array by Bubblesort algorithm
 * @param {arr}
 * @returns sorted array
 * @analysis  Time Complexity : O(n^2) Space Complexity : O(1)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        let temp = arr[j]; // 99
        arr[j] = arr[j + 1]; // 2
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([99, 2, 5, 6, 78, 33])); // output [ 2, 5, 6, 33, 78, 99 ]
/**
 * @desc sorting array by Selectionsort algorithm
 * @param {arr}
 * @returns sorted array
 * @analysis  Time Complexity : O(n^2) Space Complexity : O(1)
 */
function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([99, 2, 5, 6, 78, 33])); // output [ 2, 5, 6, 33, 78, 99 ]
/**
 * @desc sorting array by Insertionsort algorithm
 * @param {arr}
 * @returns sorted array
 * @analysis  Time Complexity : O(n^2) Space Complexity : O(1)
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > insertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
}
console.log(insertionSort([99, 2, 5, 6, 78, 33])); // output [ 2, 5, 6, 33, 78, 99 ]
/**
 * @desc sorting array by Mergesort algorithm
 * @param {arr}
 * @returns sorted array
 * @analysis  Time Complexity : O(n log(n))	 Space Complexity : O(n)
 */
function mergeSort(array) {
  // O(log n)
  // Base Case
  if (array.length < 2) return array;
  // Recursive Case
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray) {
  // O(n)
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
console.log(mergeSort([99, 2, 5, 6, 78, 33])); // output [ 2, 5, 6, 33, 78, 99 ]
/**
 * @desc sorting array by Quicksort algorithm
 * @param {array}
 * @returns sorted array
 * @analysis  Time Complexity :O(n^2)	Space Complexity : O(log(n))
 */
function quicksort(array) {
  // Base Case
  if (array.length < 2) return array;
  // Recursive Case
  let povit = array[array.length - 1];
  let left = []; // less
  let right = []; // gutter
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > povit) right.push(array[i]);
    else left.push(array[i]);
  }
  return [...quicksort(left), povit, ...quicksort(right)];
}
console.log(quicksort([99, 2, 5, 6, 78, 33])); // output [ 2, 5, 6, 33, 78, 99 ]
