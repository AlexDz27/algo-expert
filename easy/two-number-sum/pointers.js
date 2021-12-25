function twoNumberSum(array, sum) {
  array = array.sort((a, b) => a - b)

  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer < rightPointer) {
    let leftItem = array[leftPointer]
    let rightItem = array[rightPointer]

    const potentialTargetSum = leftItem + rightItem
    if (potentialTargetSum === sum) return [leftItem, rightItem]

    if (potentialTargetSum > sum) {
      rightPointer--
    } else {
      leftPointer++
    }
  }

  return []
}

// Genuine test case
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
console.log(twoNumberSum(array, targetSum))

const array1 = [4, 3, 5, 6, 10]
const targetSum1 = 9
console.log(twoNumberSum(array1, targetSum1))