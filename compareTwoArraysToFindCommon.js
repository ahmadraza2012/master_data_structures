arr1 = ["a", "b", "c"];
arr2 = ["z", "x", "s"];

// broot force approch = O(n^2)
    // function findCommonElementInArray(arr1, arr2){
    //     for (let i = 0; i < arr1.length; i++) {
    //         for (let j = 0; j < arr2.length; j++) {
    //             if(arr2[j] === arr1[i]) return true;
    //         }
    //     }
    //     return false;
    // }

// O(n^2)
    // function findCommonElementInArray(arr1, arr2) {
    //   for (let i = 0; i < arr1.length; i++) {
    //     if (arr2.includes(arr1[i])) return true;
    //   }
    //   return false;
    // }

//O(n+m) -> becuase we have two different arrays here.
    // function findCommonElementInArray(arr1, arr2) {
    //     const set = new Set(arr1);
    //     for (let i = 0; i < arr2.length; i++) {
    //       if (set.has(arr2[i])) return true;
    //     }
    //     return false;
    // }

// Using hash maps (Javascript Objects are hash-maps)
// O(n)
/*
    Steps:
        1) Create a Hash-Maps from arr1
        2) Iterate on arr2 and Look into created Hash-Maps
*/

function findCommonElementInArray(arr1, arr2) {
    const map = {};
    
    // Build hash map from arr1
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      // avoid duplicate entries into the maps.
      if(!map[element]){
        map[element] = true;
      }
    }
    
    // Check for common items in arr2
    for (let i = 0; i < arr2.length; i++) {
      const element = arr2[i];
      if (map[element]) {
        return true;
      }
    }
    
    return false;
  }
  
  

result = findCommonElementInArray(arr1, arr2);
console.log(result);
