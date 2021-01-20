let array = [2, 3, 4, 3, 6, 7]
let sum = 6

function bruteForceTwoSum(arr, sum) {

}

function binarySearchTwoSum(arr, sum) {

}

function binaryMatch(arr, num) {

}

function hashTwoSum(arr, sum) {
  let found = [0];
  for (let i = 0; i < arr.length / 2; i++) {
    let cur = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (cur + arr[j] == sum) {
        found.push(concat(arr[i] + arr[j]))
      }
    }
  }

  return found
}

console.log(hashTwoSum(array, 6))
