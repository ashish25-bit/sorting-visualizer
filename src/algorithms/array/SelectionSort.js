import { swapNumber, changeBarColor, swapBarWidth } from './HelperFunctions'

export const selectionSortAlgo = (numberArray, speed) => {
    const length = numberArray.length
    let min_index
    let delay = 0

    for (let i=0; i < length - 1; i++) {
        min_index = i
        for (let j=i+1; j < length; j++) {
            // changing the color of the bars which are compared
            changeBarColor(min_index, 'var(--minIndexSelectionSort)', delay)
            delay += parseInt(speed)
            changeBarColor(j, 'var(--comparisionColor)', delay)
            delay += parseInt(speed)

            if (numberArray[j] < numberArray[min_index]) {
                changeBarColor(j, 'var(--barColor)', delay)
                changeBarColor(min_index, 'var(--barColor)', delay)
                min_index = j
            }
            else 
                changeBarColor(j, 'var(--barColor)', delay)
            
            delay += parseInt(speed)
        }
        swapNumber(min_index, i, numberArray)
        // swapping the bar widths
        swapBarWidth(min_index, i, 'var(--swapColor)', delay, numberArray[min_index], numberArray[i], length)
        delay += parseInt(speed)
        changeBarColor(min_index, 'var(--barColor)', delay)
        changeBarColor(i, 'var(--sortedColor)', delay)
    }
    changeBarColor(length-1, 'var(--sortedColor)', delay)
    console.log(numberArray)
    return delay
}