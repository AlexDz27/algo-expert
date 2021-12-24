function validateSubsequence(array, subsequence) {
  let arrayIdx = 0
  for (let i = 0; i < subsequence.length; i++) {
    const subsequenceItem = subsequence[i]

    while (true) {
      const arrayItem = array[arrayIdx]

      if (arrayItem === undefined) return false
      arrayIdx++

      if (subsequenceItem === arrayItem) break
    }
  }

  return true
}


// Genuine test case
const array = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequence = [1, 6, -1, 10]
console.log(validateSubsequence(array, subsequence))

const array1 = [5, 1, 22, 25, 6, -1]
const subsequence1 = [1, 33]
console.log(validateSubsequence(array1, subsequence1))

const array2 = [5, 1, 22, 25, 6, -1]
const subsequence2 = [0, 66]
console.log(validateSubsequence(array2, subsequence2))