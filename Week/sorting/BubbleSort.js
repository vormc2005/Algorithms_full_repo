function sortList(unsortedList){
    for(let i = unsortedList.length; i >=0; i--){
        let swapped = false;
        for(let j = 0; j < i; j++){
            if(unsortedList[j] > unsortedList[j+1]){
                var temp = unsortedList[j]
                unsortedList[j] = unsortedList[j+1]
                unsortedList[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) return unsortedList
    }
    return unsortedList
}

const array = [5,3,1,2,4]

console.log(sortList(array))

function bubbleSort(unsortedArray){
    for(let i=unsortedArray.length; i >=0; i--){
        let swapped = false;
        for(let j = 0; j< i; j++){
            if(unsortedArray[j] > unsortedList[j+1]){
                let temp = unsortedArray[j]
                unsortedArray[j] = unsortedArray[j+1]
                unsortedArray[j] = temp
                swapped = true
            }
        }
        if(!swapped) return unsortedArray
    }
    return unsortedArray
}