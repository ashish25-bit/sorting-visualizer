import React, { useState, useEffect } from 'react';
import './App.css';
import { bubbleSortAlgo } from './algorithms/BubbleSort';

const App = () => {
    const [numberArray, setNumberArray] = useState([])
    const [range, setRange] = useState(5)
    const [sortSpeed, setSortSpeed] = useState(1000)

    const min = 10
    const max = 100

    const generateArray = () => {
        // generate-numbers 
        let numbers = []
        for (let i = 0; i < 100; i++)
            numbers.push(randomNumber())
        setNumberArray(numbers)
    }

    useEffect(() => generateArray(), [])

    const randomNumber = () => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const setRangeOfNumbers = e => {
        setRange(e.target.value)
    }

    const bubbleSort = () => {
        let numbers = numberArray
        numbers = numbers.slice(0, range)
        const swaps = bubbleSortAlgo(numbers)
        let copy_numbers = numberArray.slice(0, range)
        const bars = document.querySelectorAll('.number-bar')
        for (let i = 0; i < swaps.length; i++ ) {
            const [barIndex1, barIndex2]  = swaps[i]
            
            const bar1 = bars[barIndex1]
            const bar2 = bars[barIndex2]

            setTimeout(() => {
                const tempNumber = copy_numbers[barIndex1]
                copy_numbers[barIndex1] = copy_numbers[barIndex2]
                copy_numbers[barIndex2] = tempNumber
        
                bar1.style.width = `${copy_numbers[barIndex1]}%`
                bar2.style.width = `${copy_numbers[barIndex2]}%`
        
                if (range <= 50) {
                    bar1.innerText = copy_numbers[barIndex1]
                    bar2.innerText = copy_numbers[barIndex2]
                }
            }, i * sortSpeed)
        } 
    }

    const setInegerSortSpeed = e => {
        const val = e.target.value

        if (e.target.validity.valid && e.target.value)
            setSortSpeed(e.target.value)
        
        else if (val === '' || val === '-')
            setSortSpeed(1)
    } 

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <div style={flexContainer}>
                <div style={{ flex: '1' }}>
                    <input 
                        type="range" 
                        min="5" 
                        max="100" 
                        value={range} 
                        className="slider" 
                        onChange={e => setRangeOfNumbers(e)}
                    />{' '}
                    <label style={{ fontSize: '12px' }}>{range} Elements</label> {' '}
                    <input 
                        type='tel'
                        style={inputTime}
                        value={sortSpeed}
                        onChange={setInegerSortSpeed}
                        pattern="^-?[0-9]\d*\.?\d*$"
                    /> {' '}
                    <label style={{ fontSize: '12px' }}>ms(Sorting Speed)</label>
                </div>
                <div style={{ flex: '1' }}>
                    <button
                        style={btnStyle}
                        onClick={() => generateArray()
                    }>Generate New Array</button>
                    <button
                        style={btnStyle}
                        onClick={() => bubbleSort()}
                    >Bubble Sort</button>
                </div>
            </div>
            <div className='bar_container'>
                {
                    numberArray.map((number, index) => 
                        index < range ?
                            <div 
                                key={index}
                                className='number-bar'
                                style={{ 'width': `${number}%` }}
                            >{ range <= 50 ? number : null }
                            </div> : 
                            null
                    )
                }
            </div>
            {/* <div style={{ position: 'absolute', height: '680px', width: '80%', background: 'rgba(255, 0, 0, 0.5)', top: '35px' }}></div> */}
            <div style={flexContainer}>
                <div className='mark-num-style'>10</div>
                <div className='mark-num-style'>20</div>
                <div className='mark-num-style'>30</div>
                <div className='mark-num-style'>40</div>
                <div className='mark-num-style'>50</div>
                <div className='mark-num-style'>60</div>
                <div className='mark-num-style'>70</div>
                <div className='mark-num-style'>80</div>
                <div className='mark-num-style'>90</div>
                <div className='mark-num-style'>100</div>
            </div>
        </div>
    );
}

const flexContainer = {
    display: 'flex'
}

const btnStyle = {
    margin: '0 10px'
}

const inputTime = {
    border: '1px solid #ccc',
    width: '50px',
    padding: '2px 5px',
    fontSize: '10px', 
    borderRadius: '5px',
    marginLeft: '20px'
} 

export default App;

// for (let i = 0; i < swaps.length; i++ ) {
//     const [barIndex1, barIndex2]  = swaps[i]    
//     setTimeout(() => {
//         const tempNumber = copy_numbers[barIndex1]
//         copy_numbers[barIndex1] = copy_numbers[barIndex2]
//         copy_numbers[barIndex2] = tempNumber

//         bar1.style.width = `${copy_numbers[barIndex1]}%`
//         bar2.style.width = `${copy_numbers[barIndex2]}%`

//         if (range <= 50) {
//             bar1.innerText = copy_numbers[barIndex1]
//             bar2.innerText = copy_numbers[barIndex2]
//         }
//     }, i * sortSpeed)
// } 

// for (let i=0; i<comparisions.length; i++) {
//     const { comparision: [barIndex1, barIndex2], swap } = comparisions[i]
//     // console.log(barIndex1, barIndex2)
//     const bar1 = bars[barIndex1]
//     const bar2 = bars[barIndex2]
//     setTimeout(() => {
//         bar1.style.backgroundColor = 'red'
//         bar2.style.backgroundColor = 'red'

//         if (!swap) {
//             setTimeout(() => {
//                 bar1.style.backgroundColor = 'var(--barColor)'
//                 bar2.style.backgroundColor = 'var(--barColor)'
//             }, 10)
//         }
//         else {
//             setTimeout(() => {
//                 const tempNumber = copy_numbers[barIndex1]
//                 copy_numbers[barIndex1] = copy_numbers[barIndex2]
//                 copy_numbers[barIndex2] = tempNumber

//                 bar1.style.width = `${copy_numbers[barIndex1]}%`
//                 bar2.style.width = `${copy_numbers[barIndex2]}%`

//                 if (range <= 50) {
//                     bar1.innerText = copy_numbers[barIndex1]
//                     bar2.innerText = copy_numbers[barIndex2]
//                 }
                
//                 bar1.style.backgroundColor = 'var(--barColor)'
//                 bar2.style.backgroundColor = 'var(--barColor)'
//             }, 10)
//         }

//     }, i * sortSpeed)
// }