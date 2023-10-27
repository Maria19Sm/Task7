const { mergeSort } = require('./main3.js');
module.exports = { mergeSort, breakdownArr };

function breakdownArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let FirstPartArr = []
  let SecondPartArr = []

  const middle = Math.floor(arr.length / 2);

  for(i = 0; i < middle; i++){
    FirstPartArr.push(arr[i])
  }
  for(i = middle; i < arr.length; i++){
    SecondPartArr.push(arr[i])
  }

  if (FirstPartArr.length > 1 || SecondPartArr.length > 1) {
    return mergeSort(breakdownArr(FirstPartArr), breakdownArr(SecondPartArr))
  }

  return mergeSort(breakdownArr(FirstPartArr), breakdownArr(SecondPartArr));
}

module.exports = { breakdownArr };
