import React, { useLayoutEffect, useState } from 'react';
import MethodHeader from '../components/MethodHeader';
import GraphNodes from '../components/GraphNodes';
import { width80 } from '../utils/exportStyles';

const PathFinding = () => {

    useLayoutEffect(() => { document.title="Path Finding Algorithm" } , []);
    const totalNodes = 1550;

    const [isSelecting, setIsSelecting] = useState(0);
    const [startingNode, setStartingNode] = useState(null);
    const [destinationNode, setDestinationNode] = useState(null);

    const selectingNodes = (e, key) => {
        setIsSelecting(key);
    };

    const addType = index => {

        if (!isSelecting) 
            return alert('Select Something');

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

    return (
        <div style={{ ...width80, padding: "5px 0" }}>
            <MethodHeader />
            <div className="header-path-finding">

                <button 
                    onClick={e => selectingNodes(e, 1)}
                    disabled={isSelecting === 1}
                >{
                    isSelecting === 1 ? 
                        "Selecting Start Point" : 
                        "Add Starting Point"
                }</button>
                
                <button 
                    onClick={e => selectingNodes(e, 2)}
                    disabled={isSelecting === 2}
                >{
                    isSelecting === 2 ? 
                        "Selecting Destination Point" : 
                        "Add Desination Point"
                }</button>
            </div>
            
            {/* <GraphNodes isSelecting={isSelecting} /> */}
            <div className='path-finding-nodes-container'>
                {[...Array(totalNodes).keys()].map( idx => {
                    return (
                        <GraphNodes
                            key={idx}
                            index={idx}
                            addType={addType}
                            startingNode={startingNode === idx ? startingNode : null}
                            destinationNode={destinationNode === idx ? destinationNode : null}
                        />
                    )
                })}
            </div>
            
        </div>
    )
}

export default PathFinding
