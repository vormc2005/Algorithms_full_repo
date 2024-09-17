function sortList(unsortedList) {
for(let i = 0; i<unsortedList.length; i++){
    let minIndex = i;
    for(j=i; j< unsortedList.length; j++){
        if(unsortedList[j]<unsortedList[minIndex]){
            minIndex = j;
        }
    }
    [unsortedList[i], unsortedList[minIndex]] = [unsortedList[minIndex], unsortedList[i]]
}
return unsortedList
}

const array = [5,3,1,2,4]


function selectionSort(unsortedArray){
    for(let i = 0; i < unsortedArray.length; i++){
        let minIndex = i;
        for(let j = i; j< unsortedArray.length; j++){
            if(unsortedArray[i] < unsortedArray[minIndex]){
                minIndex = j
            }
        }
        [unsortedArray[i], unsortedArray[minIndex]] = [unsortedArray[minIndex], unsortedArray[i]]
    }
    return unsortedArray;
}


// function sortList(unsortedList) {
//     const n = unsortedList.length;
//     for (var i = 0; i < n; i++) {
//         // Assume the current position as minimum
//         let minIndex = i;

//         // Find the minimum element's index from the rest of the list
//         for (var j = i; j < n; j++) {
//             if (unsortedList[j] < unsortedList[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         // Swap the minimum element with the first element
//         [unsortedList[i], unsortedList[minIndex]] = [unsortedList[minIndex], unsortedList[i]];
//     }
//     return unsortedList;
// }


console.log(sortList(array))