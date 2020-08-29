export const bubbleSortAlgo = numberArray => {
    const length = numberArray.length
    // let comparisions = []
    let swaps = []
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length-i-1; j++) {
            if (numberArray[j] > numberArray[j+1]){
                swapNumber(j, j+1, numberArray)
                swaps.push([j, j+1])
                // comparisions.push({ comparision: [j, j+1], swap: true })
            }
            // else
            //     comparisions.push({ comparision: [j, j+1], swap: false })
        } 
    }
    console.log(numberArray)
    return swaps
}

function swapNumber(index1, index2, numberArray) {
    let temp = numberArray[index1]
    numberArray[index1] = numberArray[index2] 
    numberArray[index2] = temp
}
