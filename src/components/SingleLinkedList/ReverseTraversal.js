import React, { Fragment } from 'react';
import StepsController from '../StepsController';
import ReverseTraversalCode from './Code/ReverseTraversal'
import { backToNormal, reverseTraversalSLL } from '../../algorithms/linkedlist/TraverseSSL';

function ReverseTraversal({
    nodes,
    currentNode,
    setCurrentNode,
    setEngage
}) {

    // cancel operation
    const cancelOperation = () => {
        setEngage(false);
        setCurrentNode(-1);
        backToNormal(0, nodes.length);
    }

    // for controlling previous and next step
    const controller = data => {
        // if the prevoius btn is clicked then the nodes greater than current node should be normal color
        if (data === -1) 
            backToNormal(currentNode, nodes.length);
        let temp = currentNode + data;
        reverseTraversalSLL(temp);
        setCurrentNode(prevState => prevState + data);
    }

    return (
        <Fragment>
            <StepsController
                currentNode={currentNode}
                length={nodes.length}
                controller={controller}
                cancelOperation={cancelOperation}
            />
            <ReverseTraversalCode current={{nodes, currentNode}} />
        </Fragment>
    )
}

export default ReverseTraversal