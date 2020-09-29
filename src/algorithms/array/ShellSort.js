import { changeBarColor, changeBarWidth } from "./HelperFunctions"

export const ShellSortAlgo = (numberArray, sortSpeed) => {
    let delay = 0
    let length = numberArray.length

    for (let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2)) {
        for (let i = gap; i < length; i += 1) {
            let temp = numberArray[i]
            let j
            for (j = i; j >= gap && numberArray[j - gap] > temp; j -= gap) {
                // comparision between bars at index j-gap and temp
                changeBarColor(j-gap, 'var(--comparisionColor)', delay)
                delay += parseInt(sortSpeed)
                changeBarColor(i, 'var(--comparisionColor)', delay)
                delay += parseInt(sortSpeed)

                // change the width of the var at index j to the width of the bar at j-gap
                numberArray[j] = numberArray[j - gap]
                changeBarWidth(j, numberArray[j], delay, length, 'var(--swapColor)')
                delay += parseInt(sortSpeed)

                // back to normal
                changeBarColor(j-gap, 'var(--barColor)', delay)
                changeBarColor(i, 'var(--barColor)', delay)
                changeBarColor(j, 'var(--barColor)', delay)
                delay += parseInt(sortSpeed)
            }
            // change the width of the bar at index j with the temp bar width
            numberArray[j] = temp
            changeBarWidth(j, numberArray[j], delay, length, 'var(--swapColor)')
            delay += parseInt(sortSpeed)

            // sorted
            if (gap === 1) {
                changeBarColor(j, 'var(--sortedColor)', delay)
                delay += parseInt(sortSpeed)
            }
            // back to normal
            else {
                changeBarColor(j, 'var(--barColor)', delay)
                delay += parseInt(sortSpeed)
            }
        }
    }
    for (let k=0; k<length; k++) {
        changeBarColor(k, 'var(--sortedColor)', delay)
        delay += 10
    }

    console.log(numberArray)
    return delay
}
