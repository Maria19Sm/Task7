function mergeSort(leftside, rightside) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftside.length && rightIndex < rightside.length) {
    if (leftside[leftIndex] < rightside[rightIndex]) {
      result.push(leftside[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightside[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftside.length) {
    result.push(leftside[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightside.length) {
    result.push(rightside[rightIndex]);
    rightIndex++;
  }

  return result;
}
module.exports = { mergeSort };