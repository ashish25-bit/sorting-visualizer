import React from 'react';

const StepsController = ({ 
    currentNode,
    length,
    controller,
    cancelOperation
}) => {
    return (
        <div className="controlBtnContainer">
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
