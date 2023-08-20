

function mergeSortedArrays(arr1,arr2){
    let lex1=0; let lex2=0; const mergedArray = [];

    if(arr1.length == 0){
        return arr2;
    }
    if(arr2.length == 0){
        return arr1;
    }

    for (let i = 0; i < arr1.length + arr2.length; i++) {
        let value=0;
        if(arr1[lex1]<=arr2[lex2]){
            value = arr1[lex1];
            lex1++;
        }
        else if(arr1[lex1]>arr2[lex2]){
            value = arr2[lex2];
            lex2++;
        }else{
            value = arr1[lex1] | arr2[lex2]
        }
        mergedArray[i] = value;
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31],[4,6,3]))