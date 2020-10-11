import React, { Fragment, useEffect, useState } from 'react';
import StepsController from '../StepsController';
import InsertBeginCode from './Code/InsertBegin';

const InsertBegin = ({ setEngage, firstNode }) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [newNode, setNewNode] = useState(null);
    const totalSteps = 3;

    // cancel operation
    const cancelOperation = () => {
        setEngage(false);
    }

    const controller = data => {
        setCurrentStep(prevState => prevState + data);

    }

    useEffect(() => {
        const num = Math.floor(Math.random() * 50) + 1;
        setNewNode(num);
    }, [])
    
    return (
        <Fragment>
            {
                <div 
                    className="linked-list-node newnode"
                    style={{ width: '50px' }}
                    title="New Node"
                >
                    <div className="data">{newNode}</div>
                </div>
            }
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
