import React from 'react';

const GraphNodes = ({
    index,
    addType,
    startingNode,
    destinationNode
}) => {

    const className = startingNode ? ( 
        'node start-node' ) : (
        destinationNode ? (
            'node end-node' 
        ) : (
            'node'
        )
    );

    return (
        <div 
            className={className}
            onClick={() => addType(index)}
        ></div>
    )
}

export default GraphNodes;
