import { changeBarColor, changeBarWidth } from "./HelperFunctions"

export const insertionSortAlgo = (numberArray, speed)=> {
    let length = numberArray.length
    let delay = 0

    for (let i=0; i<length; i++) {
        let key = numberArray[i]
        let j = i-1
        
        changeBarColor(i, 'var(--comparisionColor)', delay)
        delay += parseInt(speed)

        while (j>=0 && numberArray[j] > key) {
            numberArray[j+1] = numberArray[j]
            
            // width update
            changeBarWidth(j+1, numberArray[j+1], delay, length, 'var(--swapColor)')
            changeBarWidth(j, numberArray[j], delay, length, 'var(--swapColor)')

            delay += parseInt(speed)

            // back to normal
            changeBarColor(j, 'var(--barColor)', delay)
            delay += parseInt(speed)

            if (j === i-1)
                changeBarColor(j+1, 'var(--comparisionColor)', delay)
            else 
                changeBarColor(j+1, 'var(--barColor)', delay)

            delay += parseInt(speed)
            j = j-1
        }
        numberArray[j+1] = key
        changeBarWidth(j+1, numberArray[j+1], delay, length, 'var(--sortedColor)')
        delay += parseInt(speed)
        // updating bar color
        for(let k=0; k<i; k++) {
            changeBarColor(k, 'var(--sortedColor)', delay)
            delay += parseInt(speed)
        }
    }
    changeBarColor(length-1, 'var(--sortedColor)', delay)
    
    console.log(numberArray)
    return delay
}
