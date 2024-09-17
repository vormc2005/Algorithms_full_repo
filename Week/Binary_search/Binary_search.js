// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <=right){
//         let mid = left + Math.floor((right-left)/2);
//         if(arr[mid] === target) return mid
//         if(arr[mid] < target){
//             left = mid +1
//         }else{
//             right = mid -1
//         }

//     }
//     return -1;
// }

// const array = [1,3,6,8,9,10]

// console.log(binarySearch(array, 9))

function binarySearch(arr, target){
    let left = 0
    let right = arr.length -1 

    while(left <= right){
        // let mid = left + Math.floor((right-left)/2)
        let mid = Math.floor((right+left)/2);
        if(arr[mid] === target) return mid
        if(arr[mid] < target){
            left = mid+1
        }else{
            right = mid -1
        }
    }
    return -1
}


const array = [1,3,6,8,9,10]

console.log(binarySearch(array, 9))
