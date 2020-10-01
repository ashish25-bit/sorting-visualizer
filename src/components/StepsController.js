import React from 'react';
import { controlBtnContainer } from '../utils/exportStyles';

const StepsController = ({ 
    currentNode,
    length,
    controller,
    cancelOperation
}) => {
    return (
        <div style={controlBtnContainer}>
            <button 
                onClick={() => controller(-1)}
                disabled={currentNode === 0}
            >Prev Step</button>

            <button 
                onClick={() => controller(1)}
                disabled={currentNode === length}
            >Next Step</button>
            <button onClick={cancelOperation}>
                {currentNode >= length ? "Done" : "Cancel"}
            </button>
        </div>
    )
}

export default StepsController
