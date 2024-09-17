function firstElement(arr, target){
    let left = 0
    let right = arr.length -1;
    let indexOfnumber = -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
       
        if(arr[mid] >= target){
            indexOfnumber = mid
            right = mid -1;
        }else{
            left = mid +1
        }
    }    
    return indexOfnumber;
}

let arr = [2, 3, 5, 7, 11, 13, 17, 19]
let target = 6

console.log(firstElement(arr, target))