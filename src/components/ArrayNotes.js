import React, { useState } from 'react';
import { showHideNotesBtn } from '../utils/exportStyles';
import { arrayNotes, codes } from '../utils/exportContent';
const btns = [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Shell Sort"
];

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
                <ul style={{ marginLeft: "20px" }}>{ 
                    arrayNotes[currentAlgo].map((p, index) =>
                        <li key={index}>{p}</li>
                )}
                    <li> <b>Algorithm Used</b> </li>
                </ul>

                <pre>{codes[currentAlgo]}</pre>

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
