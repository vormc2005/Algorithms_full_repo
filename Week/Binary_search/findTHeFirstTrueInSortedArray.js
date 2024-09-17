function findBoundary(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0
    let right = arr.length -1;
    let indexOfTrue = -1;
    while(left <= right){
        let mid = Math.floor((right+left)/2);  
        console.log("mid:", mid)      
        if(arr[mid]){
            indexOfTrue = mid;
            right = mid - 1;
        }else{
            left = mid +1;
        }
    }
    return indexOfTrue;
}

const array = [false, false, true, true, true]

console.log(findBoundary(array))


//If non-decreasing o increasing
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let first_true_index = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            first_true_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return first_true_index
}