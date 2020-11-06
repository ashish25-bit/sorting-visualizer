import React, { useLayoutEffect, useState, Fragment, useEffect } from 'react';
import MethodHeader from '../components/MethodHeader';
import GraphNodes from '../components/GraphNodes';
import { width80 } from '../utils/exportStyles';

const totalNodes = 800;
const startNodeindex = 255;
const destinationNodeIndex = 441;

const PathFinding = () => {

    useLayoutEffect(() => { document.title="Path Finding Algorithm" } , []);

    const [isSelecting, setIsSelecting] = useState(0);
    const [startingNode, setStartingNode] = useState(startNodeindex);
    const [destinationNode, setDestinationNode] = useState(destinationNodeIndex);
    const [nodes, setNodes] = useState([]);
    const [isMouseClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const intialSetup = getNodes(startingNode, destinationNode);
        setNodes(intialSetup);
    }, [startingNode, destinationNode]);

    const selectingNodes = (e, key) => {
        setIsSelecting(key);
    };

    const addType = index => {

        if (isSelecting === 1) {
            
            if (destinationNode === index)
                return alert('This is Destindation Node');

            if (startingNode !== index)
                setStartingNode(index)
        }
        
        if (isSelecting === 2) {

            if (index === startingNode)
                return alert('This is the stating Node.');

            if (destinationNode !== index)
                setDestinationNode(index)
        }
    }

    const mouseDownFunction = index => {
        const alteredNodes = getAlertedNodes(nodes, index);
        setNodes(alteredNodes);
        setIsClicked(true);
    }

    const mouseUpFunction = () => setIsClicked(false);

    const mouseEnterFunction = index => {
        if (!isMouseClicked)
            return;

        const alteredNodes = getAlertedNodes(nodes, index);
        setNodes(alteredNodes);
    }

    const clearGrid = () => {
        const intialSetup = getNodes(startingNode, destinationNode);
        setNodes(intialSetup);
    }

    return (
        <Fragment>
            <div style={{ ...width80, padding: "5px 0" }}>
                <MethodHeader />
                <div className="header-path-finding">

                    <button 
                        onClick={e => selectingNodes(e, 1)}
                        disabled={isSelecting === 1}
                    >{
                        isSelecting === 1 ? 
                            "Changing Start Point" : 
                            "Change Starting Point"
                    }</button>
                    
                    <button 
                        onClick={e => selectingNodes(e, 2)}
                        disabled={isSelecting === 2}
                    >{
                        isSelecting === 2 ? 
                            "Changing Destination Point" : 
                            "Change Desination Point"
                    }</button>
                    <button onClick={clearGrid}>Clear Grid</button>
                </div>           
                <div className='legend'>
                    <div></div>
                    <div></div>
                </div>
            </div>


            <div className='path-finding-nodes-container'>
            {nodes.map((nodeData, index) =>
                    <GraphNodes 
                        key={index}
                        data={nodeData}
                        addType={addType}
                        onMouseDown={index => mouseDownFunction(index)}
                        onMouseUp={() => mouseUpFunction()}
                        onMouseEnter={() => mouseEnterFunction(index)}
                    />
            )}
            </div>
        </Fragment>
    )
}

function getNodes(startingNode, destinationNode) {
    return [...Array(totalNodes).keys()].map(index => createNode(index, startingNode, destinationNode));
}

const createNode = (index, startingNode, destinationNode) => {
    return {
        index,
        isStart: index === startingNode,
        isEnd: index === destinationNode,
        distance: Infinity,
        isVisisted: false,
        isWall: false,
        previousNode: null
    }
}

const getAlertedNodes = (nodes, index) => {
    const newNodes = nodes.slice();
    const node = newNodes[index];

    const newNode = {
        ...node, 
        isWall: !node.isWall
    }

    newNodes[index] = newNode;
    return newNodes;
}

export default PathFinding
