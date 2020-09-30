import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    Fragment
} from 'react';
import {
    mainContainerLL,
    btnStyle,
    flexContainer,
    flex,
    controlBtnContainer
} from '../../utils/exportStyles';
import TraversalCode from './Code/Traversal';
import { TraverseSLL, backToNormal } from '../../algorithms/linkedlist/TraverseSSL';
import { Link } from 'react-router-dom';
import url from '../../utils/url';

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
    const [currentNode, setCurrentNode] = useState(-1)
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

    const clickHandler = () => {
        setEngage(true)
        setCurrentNode(0)
        TraverseSLL(0)
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
            <div style={flexContainer}>
                <div style={flex}>
                    <input
                        type="range" 
                        min="5" 
                        max="10" 
                        value={number}
                        className="slider" 
                        onChange={e => setNumber(e.target.value)}
                        disabled={engage}
                    />{' '}
                    <label style={{ fontSize: '12px' }}>{number} Elements</label>
                </div>

                <div style={flex}>
                    <button
                        style={btnStyle}
                        onClick={() => generateLinkedList()}
                        disabled={engage}
                    >Generate Linked List</button>
                </div>
            </div>
            <div className='linked-list-node-container'>
                {
                    nodes.map(({ data }, index) => (
                        <Fragment key={index}>
                            <div title={
                                !index ? "Head" : 
                                    index === nodes.length -1 ? "Tail" : null
                            }
                            className="linked-list-node"
                            >
                                <div className="data">{data}</div>
                                <div className='next'>{ index !== nodes.length -1 ? 
                                    returnImageElement("next.png", "next-img", "next-node") :
                                    returnImageElement("null.png", "null-img", "null-node")
                                }</div>
                            </div>
                        </Fragment>
                    ))
                }
            </div>

            {
                engage && <div style={controlBtnContainer}>
                    <button 
                        onClick={() => controller(-1)}
                        disabled={currentNode === 0}
                    >Prev Step</button>

                    <button 
                        onClick={() => controller(1)}
                        disabled={currentNode === nodes.length}
                    >Next Step</button>
                    <button onClick={cancelOperation}>Cancel</button>
                </div>
            }

            <div>
                <button
                    onClick={() => clickHandler()}
                    disabled={engage}
                >Traverse</button>
            </div>
            { engage && <TraversalCode current={{nodes, currentNode}} /> }
            <Link to={url.main}>Array Sorting</Link>
        </div>
    );
};

export default TraversalSLL;

function returnImageElement(src, className, alt) {
    return <img src={require(`../../assets/${src}`)} className={className} alt={alt} />
}