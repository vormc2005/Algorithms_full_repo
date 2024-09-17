function peakOfTheMountain(arr){
    let left = 0, right = arr.length -1, boundaryIndex =-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] > arr[mid+1]){
            boundaryIndex = mid;
            right = mid -1
        }else{
            left = mid + 1
        }
    }
}