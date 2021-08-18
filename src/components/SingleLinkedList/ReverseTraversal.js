import React, { Fragment } from 'react';
import StepsController from './StepsController';
import ReverseTraversalCode from './Code/ReverseTraversal'
import { backToNormal, reverseTraversalSLL } from '../../algorithms/linkedlist/TraverseSSL';

const ReverseTraversal = ({
    nodes,
    currentNode,
    setCurrentNode,
    setEngage
}) => {

    // 
    let array = [...Array(nodes.length+1).keys()];
    let tempArray = [...Array(nodes.length).keys()].reverse();
    array = [...array, ...tempArray];

    // cancel operation
    function cancelOperation() {
        setEngage(false);
        setCurrentNode(-1);
        backToNormal(0, nodes.length);
    }

    // for controlling previous and next step
    const controller = data => {
        let temp = currentNode + data;
        // forward traversal
        if (temp <= nodes.length) {
            if (data === -1) 
                backToNormal(currentNode, nodes.length);
            reverseTraversalSLL(temp);
            setCurrentNode(prevState => prevState + data);
        }
        // reverse traversal
        else {
            if (data === -1)
                backToNormal(0, array[temp],"var(--pendingNode)");
            reverseTraversalSLL(array[temp], 1);
            setCurrentNode(prevState => prevState + data);
        }
    }

    return (
        <Fragment>
            <StepsController
                currentNode={currentNode}
                length={array.length-1}
                controller={controller}
                cancelOperation={cancelOperation}
            />
            <ReverseTraversalCode 
                current={{
                    nodes,
                    currentNode: array[currentNode],
                    arrayIndex: currentNode
                }}
            />
        </Fragment>
    )
}

export default ReverseTraversal