import React, { Fragment } from 'react';
import StepsController from './StepsController'
import TraversalCode from './Code/Traversal';
import { TraverseSLL, backToNormal } from '../../algorithms/linkedlist/TraverseSSL';

const TraversalSLL = ({
    nodes,
    currentNode,
    setCurrentNode,
    setEngage
}) => {

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
        TraverseSLL(temp);
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
            <TraversalCode current={{nodes, currentNode}} />
        </Fragment>
    );
};

export default TraversalSLL;
