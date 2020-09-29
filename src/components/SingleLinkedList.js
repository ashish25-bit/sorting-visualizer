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
    flex
} from '../utils/exportStyles';
import TraverseSLL from '../algorithms/linkedlist/TraverseSSL'

const SingleLinkedList = () => {
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
    const [number, setNumber] = useState(5)
    const list = useRef(new LIST())

    const generateLinkedList = useCallback(() => {
        setNodes([]);
        list.current.root = null;
        for (let i=0; i<number; i++) {
            const newnode = list.current.insert();
            setNodes(prevState => [...prevState, newnode]);
        }
    }, [number]);

    useEffect(() => generateLinkedList(), [generateLinkedList]);

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
                    />{' '}
                    <label style={{ fontSize: '12px' }}>{number} Elements</label>
                </div>

                <div style={flex}>
                    <button
                        style={btnStyle}
                        onClick={() => generateLinkedList()}
                    >Generate Linked List</button>
                </div>
            </div>
            <div className='linked-list-node-container'>
                {
                    nodes.map(({ data }, index) => (
                        <Fragment key={index}>
                            <div title={
                                index === 0 ? 
                                    "Head" : index === nodes.length -1 ? 
                                        "Tail" : null
                            }
                            >
                                <div className="data">{data}</div>
                                <div className='next'>{ index !== nodes.length -1 ? 
                                    <Fragment>{returnImageElement("next.png", "next-img", "next-node")}</Fragment> :
                                    <Fragment>{returnImageElement("null.png", "null-img", "null-node")}</Fragment>
                                }</div>    
                            </div>
                        </Fragment>
                    ))
                }
            </div>
            <button onClick={() => TraverseSLL(list.current)}>Traverse</button>
        </div>
    );
};

export default SingleLinkedList;

function returnImageElement(src, className, alt) {
    return <img src={require(`../assets/${src}`)} className={className} alt={alt} />
}