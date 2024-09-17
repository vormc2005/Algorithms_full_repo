// function binarySearch(arr, target){
//     let left = 0
//     let right = arr.length -1;

//     while(left <= right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid] === target) return mid;
//         if(arr[mid]< target){
//             left = mid +1

//         }else{
//             right = mid -1
//         }
//     }
//     return -1;
// }


// function findBoundary(arr){
//     let left = 0;
//     let right = arr.length -1;
//     let boundaryIndex =-1
//     while(left <= right){
//         let mid = Math.floor((left+right)/2)

//         if(arr[mid]=== true){
//             boundaryIndex = mid
//             right = mid -1
//         }else{
//             left = mid + 1
//         }
//     } 
//     return boundaryIndex
// }


// const arr = [false, false, true, true, true]

// console.log(findBoundary(arr))

// function firstNotSmaller(arr, target) {
//     let left = 0
//     let right = arr.length -1;
//     let indexOfTarget = -1;
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] >= target){
//             indexOfTarget = mid
//             right = mid -1
//         }else{
//             left = mid +1
//         }
//     }
//     return indexOfTarget
// }

// function findFirstOccurrence(arr, target) {
//     let left =0;
//     let right = arr.length -1
//     let firstIndex  = -1
//     while(left <= right){
//         let mid = Math.floor((right+left)/2);
//         if(arr[mid] === target){
//             firstIndex = mid
//             right = mid - 1
//         }else if(arr[mid] < target){
//             left = mid +1
//         }else{
//             right = mid -1
//         }

//     }
//     return firstIndex
// }


// function squareRoot(n) {
//     if(n === 0 )return 0;
//     let left = 1, right = n, res = -1
//     while(left <= right){
//         let mid = Math.floor((left+right)/2)
//         if(mid * mid === n) return mid;
//         if(mid * mid > n){
//             res = mid
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return res -1

// }


function findMinRotated(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
   let smallest = Math.min(...arr)
   console.log(smallest)
   return arr.indexOf(smallest)
}

const array = [30, 40, 50, 10, 20]
console.log(findMinRotated(array))


function peakOfMountainArray(arr) {
    
}