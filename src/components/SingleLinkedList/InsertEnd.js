import React, { Fragment, useState } from 'react';
import StepsController from '../StepsController';
import InsertEndCode from './Code/InsertEnd';
import { InsertEndController } from '../../algorithms/linkedlist/InsertionSLL';
import { backToNormal } from '../../algorithms/linkedlist/InsertionSLL';
import { backToNormal as backToNormal2 } from '../../algorithms/linkedlist/TraverseSSL';

const InsertEnd = ({ setEngage, nodes }) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [currentNode, setCurrentNode] = useState(nodes[0].data);

    const cancelOperation = () => {
        const parent = document.querySelector('.linked-list-node-container');
        const lenChild = parent.childNodes.length;
        parent.removeChild(parent.childNodes[lenChild-1]);
        backToNormal2(0, lenChild-1);
        setEngage(false);
    }

    const totalSteps = nodes.length + 1;

    const controller = data => {
        const temp = currentStep + data;
        if (temp < nodes.length)
            setCurrentNode(nodes[temp].data);
        if (data === -1)
            backToNormal({ type: 1, current: temp, length: nodes.length });
        InsertEndController(temp, totalSteps);
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
            <InsertEndCode
                currentNode={currentNode}
                currentStep={currentStep}
                length={totalSteps}
            />
        </Fragment>
    )
};

export default InsertEnd;
