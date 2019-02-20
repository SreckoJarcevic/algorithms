// Merge sort is an efficient, general - purpose,
// comparison - based sorting algorithm. Most implementations
// produce a stable sort, which means that the order of equal
// elements is the same in the input and output.Merge sort is a
// divide and conquer algorithm that was invented by John von Neumann in 1945;

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  return sorting(
    mergeSort(arr.splice(Math.ceil(arr.length / 2))),
    mergeSort(arr)
  );
}

function sorting(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  for (let i = 0; i < left.length + right.length; i++) {
    if (left[leftIndex] <= right[rightIndex] || rightIndex === right.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (right[rightIndex] < left[leftIndex] || leftIndex === left.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result;
}
