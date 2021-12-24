function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]

    for (let j = i + 1; j < array.length; j++) {
      const itemBeingChecked = array[j]

      const potentialTargetSum = item + itemBeingChecked
      if (potentialTargetSum === targetSum) return [item, itemBeingChecked]
    }
  }

  return []
}


// Genuine test case
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
console.log(twoNumberSum(array, targetSum))