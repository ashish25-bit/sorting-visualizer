import React, { Fragment, useState } from 'react';
import StepsController from './StepsController';
import InsertBeginCode from './Code/InsertBegin';
import { backToNormal, InsertBeginController } from '../../algorithms/linkedlist/InsertionSLL';
import { changeNodeColor } from '../../algorithms/linkedlist/HelperFuntion';

const InsertBegin = ({ setEngage, firstNode, newNode }) => {
    
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 3;
    
    // cancel operation
    const cancelOperation = () => {
        const parent = document.querySelector('.linked-list-node-container');
        parent.removeChild(parent.childNodes[0]);
        changeNodeColor({ index: 0, color: "var(--nodeColor)" });
        setEngage(false);
    }

    const controller = data => {
        let temp = currentStep + data;
        if (data === -1)
            backToNormal({ type: 0, current: temp });
        InsertBeginController(temp);
        setCurrentStep(prevState => prevState + data);
    }

    return (
        <Fragment>
            <StepsController
                currentNode={currentStep}
                length={totalSteps}
                controller={controller}
                cancelOperation={cancelOperation}
            />
            <InsertBeginCode
                currentStep={currentStep}
                length={totalSteps}
                firstNode={firstNode}
                newNode={newNode}
            />
        </Fragment>
    )
}

export default InsertBegin
