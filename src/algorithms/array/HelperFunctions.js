export const swapNumber = (index1, index2, numberArray) => {
    let temp = numberArray[index1]
    numberArray[index1] = numberArray[index2] 
    numberArray[index2] = temp
}

export const changeBarColor = (index, color, speed) => {
    const bars = document.querySelectorAll('.number-bar')
    const bar = bars[index].style
    window.setTimeout(() => bar.backgroundColor = color, speed)
}

export const swapBarWidth = (index1, index2, color, speed, width1, width2, range) => {
    const bars = document.querySelectorAll('.number-bar')   
    const bar1 = bars[index1]
    const bar2 = bars[index2]
    setTimeout(() => {
        // changing color
        bar1.style.backgroundColor = color
        bar2.style.backgroundColor = color

        // changing height
        bar1.style.width = `${width1}%`
        bar2.style.width = `${width2}%`

        // change the inner number if the length of the array is less than 50
        if (range <= 50) {
            bar1.innerText = width1
            bar2.innerText = width2
        }
    }, speed)
}

export const changeBarWidth = (index, width, speed, range, color) => {
    const bars = document.querySelectorAll('.number-bar')   
    const bar = bars[index]
    setTimeout(() => {
        // change the width and background color
        bar.style.width = `${width}%`
        bar.style.backgroundColor = color

        // change the inner text if the range is less than 50
        if (range <= 50) 
            bar.innerText = width
    }, speed)
}