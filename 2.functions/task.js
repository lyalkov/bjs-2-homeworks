// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } 
  if (arr[i] < min) {
    min = arr[i];
  }
  sum+=arr[i];
}
  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
  sum += arr[i];
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i=0; i<arrOfArr.length; i++) {
    let sumOfArr = func(arrOfArr[i]);
    if (sumOfArr > max) {
      max = sumOfArr;
    }
  }
  return max
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let distance = max - min;
  return distance;
}
