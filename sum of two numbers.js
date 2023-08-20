const arr1 = [1, 2, 3, 9];
const arr2 = [1, 2, 4, 6, 4];
// const arr2 = [1, 2, 4, 4, 6];
// const arr2 = [1, 2, 4, 4, 6];

// O(n^2)
// function findPairs(arr, resultValue) {
//   let pairs = [];
//   let indexes = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i != j && arr[i] + arr[j] == resultValue) {
//         pairs.push([arr[i], arr[j]]);
//         indexes.push([i, j]);
//       }
//     }
//   }
//   return { indexes, pairs };
// }

// O(n)
// function findPairsWithMaps(arr, resultValue) {
//     let pairs = [];
//     let indexes = [];
//     let map = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let complement = resultValue - arr[i];
  
//       if (map[complement] !== undefined) {
//         let complementIndex = map[complement];
//         pairs.push([arr[i], arr[complementIndex]]);
//         indexes.push([i, complementIndex]);
//       }
  
//       map[arr[i]] = i;
//     }
  
//     return { indexes, pairs };
//   }

// console.log(findPairs(arr1, 8));
// console.log(findPairs(arr2, 8));

// console.log(findPairsWithMaps(arr1, 8));
// console.log(findPairsWithMaps(arr2, 8));

function hasPairWithSum(arr, target) {
    const set = new Set();
  
    for (let num of arr) {
      const complement = target - num;
  
      // This will not run First time as set is empty
      if (set.has(complement)) {
        return true;
      }
  
      set.add(num);
    }
  
    return false;
  }
  
  const array = [1, 2, 4, 6, 4];
  const targetSum = 8;
  console.log(hasPairWithSum(array, targetSum));  // true
  
