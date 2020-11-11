import React, { useState } from 'react';
import { showHideNotesBtn } from '../utils/exportStyles';
const btns = [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort",
    "Shell Sort"
]

const ArrayNotes = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentAlgo, setCurrentAlgo] = useState(0);

    const classname = isOpen ? "array-notes open" : "array-notes";

    const changeCurrentAlgo = index => {
        if (currentAlgo !== index)
            setCurrentAlgo(index);
    }

    return (
        <div className={classname}>

            <div style={{ position: "relative" }}>
                <button 
                    style={showHideNotesBtn}
                    onClick={() => setIsOpen(prevState => !prevState)}
                >Notes</button>
            </div>

            <div className='notes'>
                <h1>{btns[currentAlgo]}</h1>
            </div>
            <div className='btn'>{
                btns.map((name, index) =>  
                    <button key={index} onClick={() => changeCurrentAlgo(index)}>{name}</button>
                )
            }</div>
        </div>
    )
};

export default ArrayNotes;
