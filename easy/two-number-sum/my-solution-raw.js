function twoNumberSum(array, targetSum) {
  const valueSubstractionMap = new Map()
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    const substractionResult = targetSum - value

    valueSubstractionMap.set(value, substractionResult)
  }

  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    const substractionResult = valueSubstractionMap.get(value)

    const potentialCorrectValue = valueSubstractionMap.get(substractionResult)
    if (potentialCorrectValue === substractionResult) continue
    if (potentialCorrectValue === undefined) continue

    return [value, substractionResult]
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