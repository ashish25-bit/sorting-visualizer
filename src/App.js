import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { bubbleSortAlgo } from './algorithms/BubbleSort';
import { selectionSortAlgo } from './algorithms/SelectionSort'
import { insertionSortAlgo } from './algorithms/InsertionSort'
import { MergeSortAlgo } from './algorithms/MergeSort'
import { QuickSortAlgo } from './algorithms/QuickSort';
import { HeapSortAlgo } from './algorithms/HeapSort'
import { ShellSortAlgo } from './algorithms/ShellSort'
import InputModal from './InputModal'
import MarkNumber from './MarkNumber'
import Bars from './Bars'

const App = () => {
    const [numberArray, setNumberArray] = useState([])
    const [range, setRange] = useState(50)
    const [sortSpeed, setSortSpeed] = useState(10)
    const [sorting, setSorting] = useState(false)
    const [generateBtnState, setGenerateBtnState] = useState(false)
    const [modalView, setModalView] = useState(false)
    const [isOpenAlgoContainer, setViewAlgoContainer] = useState(false)
    const [inputArrayOn, setInputArrayOn] = useState(false)

    const min = 10
    const max = 100

    // making the array with random numbers
    const generateArray = useCallback(() => {
        setSorting(false)
        setInputArrayOn(false)
        // generate-numbers 
        let numbers = []
        for (let i = 0; i < 100; i++)
            numbers.push(randomNumber())
        setNumberArray(numbers)
    }, [])

    useEffect(() => generateArray(), [generateArray])

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
    const getArrayInRangeAndChangeState = () => {
        setSorting(true)
        setGenerateBtnState(true)
        setViewAlgoContainer(false)
        let numbers = numberArray
        if (inputArrayOn)
            return numbers.map(num => { return num })
        numbers = numbers.slice(0, range)
        return numbers
    }

    // bubble sort
    const bubbleSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = bubbleSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // selection sort
    const selectionSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = selectionSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // insertion sort
    const insertionSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = insertionSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // merge sort
    const mergeSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = MergeSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // quick sort 
    const quickSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = QuickSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // heap sort
    const heapSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = HeapSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // shell sort
    const shellSort = () => {
        let numbers = getArrayInRangeAndChangeState()
        const delay = ShellSortAlgo(numbers, sortSpeed)
        setTimeout(() => setGenerateBtnState(false), delay)
    }

    // close the modal
    const closeInputModal = () => setModalView(false)

    // set the array as the input array
    const setArrayAsInput = inputArray => {
        setInputArrayOn(true)
        setModalView(false)
        setSorting(false)
        setNumberArray(inputArray)
        console.log(inputArray)
    }

    // clear input array and use the generated array
    const backToNormal = () => generateArray() 

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
                        disabled={sorting || inputArrayOn}
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

                    {/* select the algorithm */}
                    <button
                        style={btnStyle}
                        disabled={sorting}
                        onClick={() => setViewAlgoContainer(prevState => !prevState)}
                    >Select Algorithm</button>

                    {/* algorithm button container */}
                    {
                        isOpenAlgoContainer &&
                        <div style={btnContainerStyle}>
                            {/* bubble sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => bubbleSort()}
                                disabled={sorting}
                            >Bubble Sort</button>
                            
                            {/* selection sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => selectionSort()}
                                disabled={sorting}
                            >Selection Sort</button>

                            {/* insertion sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => insertionSort()}
                                disabled={sorting}
                            >Insertion Sort</button>

                            {/* merge sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => mergeSort()}
                                disabled={sorting}
                            >Merge Sort</button>

                            {/* quick sort */}
                            <button 
                                style={algorithmButtonStyle}
                                onClick={() => quickSort()}
                                disabled={sorting}
                            >Quick Sort</button>

                            {/* heap sort */}
                            <button 
                                style={algorithmButtonStyle}
                                onClick={() => heapSort()}
                                disabled={sorting}
                            >Heap Sort</button>

                            {/* shell sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => shellSort()}
                                disabled={sorting}
                            >Shell Sort</button>
                        </div>
                    }
                    
                    {/* generating new array */}
                    <button
                        style={btnStyle}
                        onClick={() => { generateArray(); setViewAlgoContainer(false)}}
                        disabled={generateBtnState}
                    >Generate New Array</button>

                    {/* button for input */}
                    <button 
                        style={btnStyle}
                        onClick={() => setModalView(true)}
                        disabled={generateBtnState}
                    >Input Elements</button>
                </div>
            </div>
            <Bars 
                containerClass={'bar_container'}
                displayArray={numberArray}
                background={!sorting ? 'var(--barColor)' : null}
                range={range}
                inputArrayOn={inputArrayOn}
                comparision={50}
            />
            <MarkNumber customStyle={flexContainer} />
            <InputModal 
                view={modalView} 
                closeModal={closeInputModal}
                arrayAsInput={setArrayAsInput}
                btnStyle={btnStyle}
                backToNormal={backToNormal}
            />
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

const btnContainerStyle = {
    position: 'fixed',
    width: '130px',
    background: '#fff',
    top: '25px',
    borderRadius: '5px',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)'
}

const algorithmButtonStyle = {
    width: '100%',
    border: 'none',
    background: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '5px',
}

export default App;
