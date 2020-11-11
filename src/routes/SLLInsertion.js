import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import MethodHeader from '../components/MethodHeader';
import ButtonLL from '../components/ButtonLL';
import NodeLL from '../components/NodeLL';
import InsertBegin from '../components/SingleLinkedList/InsertBegin';
import InsertEnd from '../components/SingleLinkedList/InsertEnd';
import LegendNodes from '../components/Nodes/Nodes';
import { mainContainerLL, flexContainer, llBtnStyle, selectElement } from '../utils/exportStyles';
import { insertBeginSLL, insertEndSLL } from '../algorithms/linkedlist/InsertionSLL';

const SLLInsertion = () => {

    useLayoutEffect(() => { document.title="Single Linked List Insertion" } , []);

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
    const [currentAlgo, setCurrentAlgo] = useState(-1);
    /**
     * 0 -> insertion at the beginning
     * 1 -> insertion at the end
     * 2 -> insertion at a position
     */
    const [newNode, setNewNode] = useState(null);
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
        setEngage(true);
        setCurrentAlgo(data);
        const num = Math.floor(Math.random() * 50) + 1;
        setNewNode(num);

        switch (data) {
            case 0: 
                insertBeginSLL(num);
                break;
            case 1:
                insertEndSLL(num);
                break;
            case 2: 
                break;
            default: 
                return;
        }
    }

    const customBtnStyle = engage ? {...llBtnStyle, opacity: "0.5"} : llBtnStyle;

    return (
        <div style={mainContainerLL}>
            <MethodHeader />
            <ButtonLL
                number={number}
                setNumber={setNumber}
                engage={engage}
                generateLinkedList={generateLinkedList}
                range={[5, 9]}
            />
            <NodeLL
                nodes={nodes}
                linkedList={0}
            />

            {/* insertion at the beginning */}
            {
                engage && currentAlgo === 0 &&
                <InsertBegin 
                    setEngage={setEngage}
                    firstNode={nodes[0].data}
                    newNode={newNode}
                />
            }
            
            {/* insertion at the end */}
            {
                engage && currentAlgo === 1 && 
                <InsertEnd
                    setEngage={setEngage}
                    nodes={nodes}
                />
            }
            
            {/* insertion at a porition */}
            {
                engage && currentAlgo === 2 && 
                <h1>Insert At A Position</h1>
            }

            <div style={{...flexContainer, gap: "10px"}}>
                {/* insertion at the beginning */}
                <button 
                    style={customBtnStyle}
                    disabled={engage}
                    onClick={() => clickHandler(0)}
                >Insertion at the front</button>

                {/* insertion at the end */}
                <button 
                    style={customBtnStyle}
                    disabled={engage}
                    onClick={() => clickHandler(1)}
                >Insert at the end</button>

                {/* insertion at a position */}
                <div style={{ flex:"1" }}>
                    <button 
                        style={{
                            ...customBtnStyle,
                            display: "inline-block",
                            width: "calc(100% - 52px)"
                        }}
                        disabled={engage}
                        onClick={() => clickHandler(2)}
                    >Insert at a position</button>
                    
                    <select 
                        style={selectElement}
                        disabled={engage}
                    >{
                        [...Array(number).keys()].map(num => <option key={num}>{num}</option>)
                    }</select>
                </div>
            </div>
            { engage && <LegendNodes color={"linkedList"} /> }

        </div>
    )
}

export default SLLInsertion
