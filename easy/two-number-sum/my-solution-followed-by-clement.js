function twoNumberSum(array, targetSum) {
  const bag = {}
  for (const item of array) {
    const shouldBeInBagNumber = targetSum - item
    if (shouldBeInBagNumber in bag) {
      return [item, shouldBeInBagNumber]
    }

    bag[item] = null
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

const array2 = [4, 3, 1, -1]
const targetSum2 = 9
console.log(twoNumberSum(array2, targetSum2))