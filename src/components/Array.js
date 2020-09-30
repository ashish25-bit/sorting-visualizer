import React, { useState, useEffect, useCallback } from 'react';
import { bubbleSortAlgo } from '../algorithms/array/BubbleSort';
import { selectionSortAlgo } from '../algorithms/array/SelectionSort';
import { insertionSortAlgo } from '../algorithms/array/InsertionSort';
import { MergeSortAlgo } from '../algorithms/array/MergeSort';
import { QuickSortAlgo } from '../algorithms/array/QuickSort';
import { HeapSortAlgo } from '../algorithms/array/HeapSort';
import { ShellSortAlgo } from '../algorithms/array/ShellSort';
import InputModal from './InputModal';
import MarkNumber from './MarkNumber';
import Bars from './Bars';
import { 
    algorithmButtonStyle,
    flexContainer,
    btnStyle,
    inputTime,
    btnContainerStyle,
    flex
} from '../utils/exportStyles'
import url from '../utils/url';
import { Link } from 'react-router-dom';

const Array = () => {

    const [numberArray, setNumberArray] = useState([]);
    const [range, setRange] = useState(50);
    const [sortSpeed, setSortSpeed] = useState(10);
    const [sorting, setSorting] = useState(false);
    const [generateBtnState, setGenerateBtnState] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [isOpenAlgoContainer, setViewAlgoContainer] = useState(false);
    const [inputArrayOn, setInputArrayOn] = useState(false);

    const min = 10;
    const max = 100;

    // making the array with random numbers
    const generateArray = useCallback(() => {
        setSorting(false)
        setInputArrayOn(false)
        // generate-numbers 
        let numbers = []
        for (let i = 0; i < 100; i++)
            numbers.push(randomNumber())
        setNumberArray(numbers)
    }, []);

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

    const clickHandler = sortFunction => {
        let numbers = getArrayInRangeAndChangeState();
        const delay = sortFunction(numbers, sortSpeed);
        setTimeout(() => setGenerateBtnState(false), delay);
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
                <div style={flex}>
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
                <div style={flex}>

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
                                onClick={() => clickHandler(bubbleSortAlgo)}
                                disabled={sorting}
                            >Bubble Sort</button>
                            
                            {/* selection sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(selectionSortAlgo)}
                                disabled={sorting}
                            >Selection Sort</button>

                            {/* insertion sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(insertionSortAlgo)}
                                disabled={sorting}
                            >Insertion Sort</button>

                            {/* merge sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(MergeSortAlgo)}
                                disabled={sorting}
                            >Merge Sort</button>

                            {/* quick sort */}
                            <button 
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(QuickSortAlgo)}
                                disabled={sorting}
                            >Quick Sort</button>

                            {/* heap sort */}
                            <button 
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(HeapSortAlgo)}
                                disabled={sorting}
                            >Heap Sort</button>

                            {/* shell sort */}
                            <button
                                style={algorithmButtonStyle}
                                onClick={() => clickHandler(ShellSortAlgo)}
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
            <Link to={url.sLLTraversing}>Linked List Operations</Link>
        </div>
    );
}

export default Array
