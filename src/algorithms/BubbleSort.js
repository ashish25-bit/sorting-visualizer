import { swapNumber, changeBarColor, swapBarWidth } from './HelperFunctions'

export const bubbleSortAlgo = (numberArray, speed) => {
    const length = numberArray.length
    let delay = 0
    for (let i = 0; i < length - 1; i++) {
        for (var j = 0; j < length-i-1; j++) {
            // changing the color of the bars which are compared
            changeBarColor(j, 'var(--comparisionColor)', delay)
            delay += parseInt(speed)
            changeBarColor(j+1, 'var(--comparisionColor)', delay)
            delay += parseInt(speed)

            // comparing the numbers
            if (numberArray[j] > numberArray[j+1]) {
                swapNumber(j, j+1, numberArray)

                // if the numbers are swapped change the width of the bars of the corresponding index
                swapBarWidth(j, j+1, 'var(--swapColor)', delay, numberArray[j], numberArray[j+1], length)
                delay += parseInt(speed)
            }
            changeBarColor(j, 'var(--barColor)', delay)
            delay += parseInt(speed)
        } 
        changeBarColor(j, 'var(--sortedColor)', delay)
    }
    changeBarColor(0, 'var(--sortedColor)', delay)
    delay += parseInt(speed)
    console.log(numberArray)
    return delay
}
