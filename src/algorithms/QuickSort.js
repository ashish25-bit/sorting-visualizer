import { swapNumber, changeBarColor, swapBarWidth } from "./HelperFunctions"
let delay 
let arrayLength = -1
let done

export const QuickSortAlgo = (numberArray, speed) => {
    delay = 1
    done = []
    arrayLength = numberArray.length
    quickSort(numberArray, 0, arrayLength - 1, speed)
    
    // change the color of the remaining bars to the sorted Color
    for (let k=0; k<arrayLength; k++) {
        if (!done.includes(k)) {
            changeBarColor(k, 'var(--sortedColor)', delay)
            delay += parseInt(speed)
        }
    } 

    console.log(numberArray)
    return delay
} 
  
function partition ( numberArray, low, high, speed) {
    let pivot = numberArray[high];
    let i = (low - 1);

    // changing the color of the pivot element
    changeBarColor(high, 'var(--pivotColorQuickSort)', delay)
    delay += parseInt(speed)
  
    for (let j = low; j <= high - 1; j++) {  
        // change the color of the bar at j index to the comparision color
        changeBarColor(j, 'var(--comparisionColor)', delay)
        delay += parseInt(speed)

        if (numberArray[j] < pivot) {
            i++;
            swapNumber(i, j, numberArray);  
            swapBarWidth(i, j, 'var(--swapColor)', delay, numberArray[i], numberArray[j], arrayLength)
            delay += parseInt(speed)
            // change the color of the ith element to barColor after the swap
            changeBarColor(i, 'var(--barColor)', delay)
            delay += parseInt(speed)
        }
        // change the color of the jth element to barColor
        changeBarColor(j, 'var(--barColor)', delay)
        delay += parseInt(speed)
    }
    swapNumber(i + 1, high, numberArray);  
    swapBarWidth(i+1, high, 'var(--swapColor)', delay, numberArray[i+1], numberArray[high], arrayLength)
    delay += parseInt(speed)

    // change the color of the pivot element
    changeBarColor(high, 'var(--barColor)', delay)
    delay += parseInt(speed)

    // change the color of the bar which is on its sorted position
    changeBarColor(i+1, 'var(--sortedColor)', delay)
    delay += parseInt(speed)
    done.push(i+1)

    return (i + 1);  
}

function quickSort(numberArray, low, high, speed) {
    if (low < high) {
        let pi = partition(numberArray, low, high, speed);

        quickSort(numberArray, low, pi - 1, speed);  
        quickSort(numberArray, pi + 1, high, speed);
    }  
}