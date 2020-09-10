import { swapNumber, changeBarColor, swapBarWidth } from './HelperFunctions'
let delay;
let arrayLength = -1
let sortSpeed

export const HeapSortAlgo = (numberArray, speed) => {
    delay = 1
    arrayLength = numberArray.length
    sortSpeed = parseInt(speed)
    heapSort(numberArray)
    console.log(numberArray)
    return delay
}

function heapify(numberArray, n, i) { 
    let largest = i 
    let l = 2*i + 1 
    let r = 2*i + 2
    
    if (l < n) {
        // changing colors of bars at l and largest indexes  
        changeBarColor(l, 'var(--comparisionColor)', delay)
        delay += sortSpeed
        changeBarColor(largest, 'var(--comparisionColor)', delay)
        delay += sortSpeed
        
        /**
         * chaning the color index of largest index bar before comparing
         * beacuse if the 'if' statement is true the value of largest variable will change 
         * and yellow color will previal on the largest bar index
         */
        changeBarColor(largest, 'var(--barColor)', delay)
        if (numberArray[l] > numberArray[largest]) 
            largest = l
        
        // back to normal
        changeBarColor(l, 'var(--barColor)', delay)
        delay += sortSpeed
    }
    
    if (r < n) {
        // changing colors of bars at r and largest indexes  
        changeBarColor(r, 'var(--comparisionColor)', delay)
        delay += sortSpeed
        changeBarColor(largest, 'var(--comparisionColor)', delay)
        delay += sortSpeed
        
        changeBarColor(largest, 'var(--barColor)', delay)
        if (numberArray[r] > numberArray[largest]) 
            largest = r
         
        // back to normal
        changeBarColor(r, 'var(--barColor)', delay)
        delay += sortSpeed
    }

    if (largest !== i) { 
        swapNumber(i, largest, numberArray)
        // swap the widths of the bars at indexes i and largest
        // index1, index2, color, speed, width1, width2, range
        swapBarWidth(i, largest, 'var(--swapColor)', delay, numberArray[i], numberArray[largest], arrayLength)
        delay += sortSpeed

        // back to normal bars at index i and largest
        changeBarColor(i, 'var(--barColor)', delay)
        changeBarColor(largest, 'var(--barColor)', delay)
        delay += sortSpeed

        heapify(numberArray, n, largest)
    }
}
function heapSort(numberArray) { 
    for (let i = Math.floor(arrayLength / 2) - 1; i >= 0; i--)
        heapify(numberArray, arrayLength, i)
    
    for (let i=arrayLength-1; i>0; i--) {
        swapNumber(0, i, numberArray)
        // swap the widths of the bars at indexes i and 0
        swapBarWidth(i, 0, 'var(--swapColor)', delay, numberArray[i], numberArray[0], arrayLength)
        delay += sortSpeed
        
        // change bar color at index 0 to sorted color
        changeBarColor(i, 'var(--sortedColor)', delay)
        delay += sortSpeed

        heapify(numberArray, i, 0); 
    } 

    changeBarColor(0, 'var(--sortedColor)', delay)
} 
