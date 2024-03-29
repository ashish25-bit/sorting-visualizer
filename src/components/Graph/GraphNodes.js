import React from 'react';

const GraphNodes = ({
    data,
    addType,
    onMouseDown,
    onMouseUp,
    onMouseEnter
}) => {

    const {
        index,
        isStart,
        isEnd,
        isWall,
    } = data;

    const className = 
        isStart ? (
            'node start-node'
        ) : (
        isEnd ? (
            'node end-node'
        ) : (
        isWall ? (
                'node wall-node'
        ) : (
            'node'
        ))
    );

    return (
        <div 
            className={className}
            onClick={() => addType(index)}
            onMouseDown={() => onMouseDown(index)}
            onMouseUp={() => onMouseUp()}
            onMouseEnter={() => onMouseEnter(index)}
        ></div>
    )
}

export default GraphNodes;
