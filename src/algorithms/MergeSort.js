import { changeBarWidth, changeBarColor } from './HelperFunctions'
let delay
let arrayLength = -1

export const MergeSortAlgo = (numberArray, speed) => {
    delay = 0
    arrayLength = numberArray.length
    mergeSort(numberArray, 0, numberArray.length - 1, speed)
    console.log(numberArray)
    return delay
}

function mergeArray(numberArray, start, mid, end, speed) {
    let k=0
    let p = start
    let q = mid + 1
    let mergedArray = []
    let changeParams = {index: -1, width: -1}

    for (let i=start; i<=end; i++) {
        if (p > mid) {
            mergedArray.push(numberArray[q++])
            changeParams.index = q-1
            changeParams.width = numberArray[q-1]
        }
        else if (q > end) {
            mergedArray.push(numberArray[p++])
            changeParams.index = p-1
            changeParams.width = numberArray[p-1]
        }
        else if (numberArray[p] < numberArray[q]) {
            mergedArray.push(numberArray[p++])
            changeParams.index = p-1
            changeParams.width = numberArray[p-1]
        }
        else {
            mergedArray.push(numberArray[q++])
            changeParams.index = q-1
            changeParams.width = numberArray[q-1]
        }
        changeBarWidth(changeParams.index, changeParams.width, delay, arrayLength, 'var(--swapColor)')
        k++
        delay += parseInt(speed)
    }

    for(let m=0; m<k; m++) {
        numberArray[start++] = mergedArray[m]
        changeBarWidth(start-1, numberArray[start-1], delay, arrayLength, "var(--sortedColor)")
        delay += parseInt(speed)
    }
}

function mergeSort(numberArray, start, end, speed) {
    if (start < end) {
        let mid = Math.floor(start + (end - start) / 2)

        // change the color of the mid element here
        changeBarColor(mid, 'var(--comparisionColor)', delay)
        delay += parseInt(speed)

        mergeSort(numberArray, start, mid, speed)
        mergeSort(numberArray, mid + 1, end, speed)

        mergeArray(numberArray, start, mid, end, speed)
    }
}