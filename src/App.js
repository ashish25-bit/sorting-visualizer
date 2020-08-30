import React, { useState, useEffect } from 'react';
import './App.css';
import { bubbleSortAlgo } from './algorithms/BubbleSort';

const App = () => {
    const [numberArray, setNumberArray] = useState([])
    const [range, setRange] = useState(5)
    const [sortSpeed, setSortSpeed] = useState(5)
    const [sorting, setSorting] = useState(false)
    const [generateBtnState, setGenerateBtnState] = useState(false)

    const min = 10
    const max = 100
    
    useEffect(() => generateArray(), [])

    // making the array with random numbers
    const generateArray = () => {
        setSorting(false)
        // generate-numbers 
        let numbers = []
        for (let i = 0; i < 100; i++)
            numbers.push(randomNumber())
        setNumberArray(numbers)
    }

    // generating random numbers between 10 and 100
    const randomNumber = () => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // setting only the positive speed for the array shuffling
    const setInegerSortSpeed = e => {
        const val = e.target.value

        if (e.target.validity.valid && e.target.value)
            setSortSpeed(e.target.value)
        
        else if (val === '' || val === '-')
            setSortSpeed(1)
    }

    // get the array for sorting with range number of elements
    const getArrayInRange = () => {
        let numbers = numberArray
        numbers = numbers.slice(0, range)
        return numbers
    }

    // bubble sort
    const bubbleSort = () => {
        setSorting(true)
        setGenerateBtnState(true)
        let numbers = getArrayInRange()
        const delay = bubbleSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <div style={flexContainer}>
                <div style={{ flex: '1' }}>
                    {/* range element */}
                    <input 
                        type="range" 
                        min="5" 
                        max="100" 
                        value={range} 
                        className="slider" 
                        onChange={e => setRange(e.target.value)}
                        disabled={sorting}
                    />{' '}
                    <label style={{ fontSize: '12px' }}>{range} Elements</label> {' '}
                    
                    {/* timer element */}
                    <input 
                        type='tel'
                        style={inputTime}
                        value={sortSpeed}
                        onChange={setInegerSortSpeed}
                        pattern="^-?[0-9]\d*\.?\d*$"
                        disabled={generateBtnState}
                    /> {' '}
                    <label style={{ fontSize: '12px' }}>ms(Sorting Speed)</label>
                </div>
                <div style={{ flex: '1' }}>
                    
                    {/* generating new array */}
                    <button
                        style={btnStyle}
                        onClick={() => generateArray()}
                        disabled={generateBtnState}
                    >Generate New Array</button>

                    {/* bubble sort */}
                    <button
                        style={btnStyle}
                        onClick={() => bubbleSort()}
                        disabled={sorting}
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
                                style={{ 'width': `${number}%`, background: !sorting ? 'var(--barColor)' : null }}
                            >{ range <= 50 ? number : null }
                            </div> : 
                            null
                    )
                }
            </div>
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
    margin: '0 10px',
    border: 'none',
    background: 'none',
    borderBottom: '1px #ccc solid'
}

const inputTime = {
    border: '1px solid #ccc',
    width: '30px',
    padding: '2px 5px',
    fontSize: '10px', 
    borderRadius: '5px',
    marginLeft: '20px'
} 

export default App;
