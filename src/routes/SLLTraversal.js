import React, { useState, useRef, useEffect, useCallback } from 'react';
import MethodHeader from '../components/MethodHeader';
import ButtonLL from '../components/ButtonLL'
import NodeLL from '../components/NodeLL';
import Traversal from '../components/SingleLinkedList/Traversal';
import ReverseTraversal from '../components/SingleLinkedList/ReverseTraversal'
import { mainContainerLL } from '../utils/exportStyles';
import { TraverseSLL } from '../algorithms/linkedlist/TraverseSSL';

const SLLTraversal = () => {
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
    const [engage, setEngage] = useState(false);
    const [number, setNumber] = useState(5);
    const [currentNode, setCurrentNode] = useState(-1);
    const [currentAlgo, setCurrentAlgo] = useState(-1);
    /**
     * 0 -> single linked list traversal
     * 1 -> single linked list reverse traversal
     */
    const list = useRef(new LIST());

    // for generating random valued linked list nodes
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
        setCurrentAlgo(data);
        
        switch (data) {
            case 0: 
                TraverseSLL(0);
                break;
            case 1: 
                console.log('Reverse traversal');
                break;
            default: 
                return;
        }
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
                linkedList={0}
            />

            <div>
                <button
                    onClick={() => clickHandler(0)}
                    disabled={engage}
                >Traverse</button>
                <button
                    onClick={() => clickHandler(1)}
                    disabled={engage}
                >Reverse Traversal</button>
            </div>

            {/* List Traversal */}
            { 
                engage && !currentAlgo &&
                <Traversal
                    nodes={nodes}
                    currentNode={currentNode}
                    setCurrentNode={setCurrentNode}
                    setEngage= {setEngage}
                />
            }
            
            {/* List Reverse Traversal */}
            { engage && !!currentAlgo && 
                <ReverseTraversal
                    nodes={nodes}
                    currentNode={currentNode}
                    setCurrentNode={setCurrentNode}
                    setEngage= {setEngage}
                /> 
            }
        </div>
    )
}

export default SLLTraversal;
