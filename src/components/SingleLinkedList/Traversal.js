import React, { useState, useRef, useEffect, useCallback } from 'react';
import MethodHeader from '../MethodHeader';
import ButtonLL from '../ButtonLL';
import NodeLL from '../NodeLL';
import StepsController from '../StepsController'
import TraversalCode from './Code/Traversal';
import { TraverseSLL, backToNormal } from '../../algorithms/linkedlist/TraverseSSL';
import { mainContainerLL } from '../../utils/exportStyles';

const TraversalSLL = () => {
    // Single Linked List Data structure
    // Making the node
    const Node = class {
        constructor (val) {
            this.data = val;
            this.next = null;
        }
    }

    // making the list
    const LIST = class {
        constructor() {
            this.root = null;
        }
        insert() {
            let newNode = new Node(Math.floor(Math.random() * 50) + 1)
            if (list.current.root === null)
                list.current.root = newNode;
            else {
                let tempHead = list.current.root;
                while (tempHead.next != null)
                    tempHead = tempHead.next;
                tempHead.next = newNode
            }
            return newNode;
        }
    };
    
    // state variables and refs
    const [nodes, setNodes] = useState([]);
    const [number, setNumber] = useState(5);
    const [engage, setEngage] = useState(false);
    const [currentNode, setCurrentNode] = useState(-1);
    const [currentAlgo, setCurrentAlgo] = useState(-1);
    const list = useRef(new LIST());

    const generateLinkedList = useCallback(() => {
        setNodes([]);
        list.current.root = null;
        for (let i=0; i<number; i++) {
            const newnode = list.current.insert();
            setNodes(prevState => [...prevState, newnode]);
        }
    }, [number]);

    useEffect(() => generateLinkedList(), [generateLinkedList]);

    const clickHandler = data => {
        setEngage(true)
        setCurrentNode(0)
        TraverseSLL(0)
        setCurrentAlgo(data);
    }

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
        TraverseSLL(temp)
        setCurrentNode(prevState => prevState + data);
    }

    return (
        <div style={mainContainerLL}>
            <MethodHeader />
            <ButtonLL
                number={number}
                setNumber={setNumber}
                engage={engage}
                generateLinkedList={generateLinkedList}
            />
            <NodeLL
                nodes={nodes}
                returnImageElement={returnImageElement}
                linkedList={0}
            />
            {
                engage && 
                <StepsController
                    currentNode={currentNode}
                    length={nodes.length}
                    controller={controller}
                    cancelOperation={cancelOperation}
                />
            }

            <div>
                <button
                    onClick={() => clickHandler(0)}
                    disabled={engage}
                >Traverse</button>
            </div>
            { engage && currentAlgo === 0 && <TraversalCode current={{nodes, currentNode}} /> }
        </div>
    );
};

export default TraversalSLL;

function returnImageElement(src, className, alt) {
    return <img src={require(`../../assets/${src}`)} className={className} alt={alt} />
}