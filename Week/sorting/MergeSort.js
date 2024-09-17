function sortList(unsortedList){
  const n = unsortedList.length;
  if(n <=1) return unsortedList;

  const midpoint = Math.floor(n / 2);
  const leftList = sortList(unsortedList.slice(0, midpoint));
  const rightList = sortList(unsortedList.slice(midpoint));

  let res = [];
  let leftPtr = 0; 
  let rightPtr = 0;

  while(leftPtr < midpoint || rightPtr < n - midpoint){
    if(leftPtr === midpoint){
        res.push(rightList[rightPtr]);
        rightPtr++;        
    }else if(rightPtr === n - midpoint){
        res.push(leftList[leftPtr]);
        leftPtr++
    }else if(leftList[leftPtr] <= rightList[rightPtr]){
        res.push(leftList[leftPtr]);
        leftPtr++
    }else{
        res.push(rightList[rightPtr]);
        rightPtr++
    }
  }
  return res
}

const array = [5,3,1,2,4]

console.log(sortList(array))

function mergeSort(unsortedList){
 let n = unsortedList.length;
 if(n <=1) return unsortedList

 let midPoint = Math.floor(n/2);
 let leftList = mergeSort(unsortedList.slice(0, midPoint))
 let rightList = mergeSort(unsortedList.slice(midPoint))

 let result = []
 let leftPtr = 0, rightPtr = 0

 while(leftPtr < midPoint || rightPtr < n-midPoint){
  if(leftPtr === midPoint){
    result.push(rightList[rightPtr])
    rightPtr++
  }else if(rightPtr === n - midPoint){
    result.push(leftList[leftPtr])
    leftPtr++
  }else if(leftList[leftPtr] <= rightList[rightPtr] ){
    result.push(leftList[leftPtr])
    leftPtr++
  }else{
    result.push(rightList[rightPtr])
    rightPtr++
  }

 }
 return result
}


// function sortList(unsortedList) {
//     const n = unsortedList.length;

//     // Base case: A list of size 1 or 0 is already sorted
//     if (n <= 1) return unsortedList;

//     // Split the list into left and right halves
//     const midpoint = Math.floor(n / 2);
//     const leftList = sortList(unsortedList.slice(0, midpoint));
//     const rightList = sortList(unsortedList.slice(midpoint));

//     const res = [];
//     let leftPtr = 0, rightPtr = 0;

//     // Merge the sorted left and right lists with two pointers
//     while (leftPtr < midpoint || rightPtr < n - midpoint) {
//         if (leftPtr === midpoint) {  // If left list is empty, append element from right
//             res.push(rightList[rightPtr]);
//             rightPtr++;
//         } else if (rightPtr === n - midpoint) {  // If right list is empty, append element from left
//             res.push(leftList[leftPtr]);
//             leftPtr++;
//         } else if (leftList[leftPtr] <= rightList[rightPtr]) {  // Append smaller element from left
//             res.push(leftList[leftPtr]);
//             leftPtr++;
//         } else {  // Append smaller element from right
//             res.push(rightList[rightPtr]);
//             rightPtr++;
//         }
//     }

//     return res;
// }