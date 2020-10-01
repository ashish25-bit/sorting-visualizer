import React, { Fragment } from 'react'

/**
 * @param {linkedList = 0} Single_Linked_List 
 * @param {linkedList = 1} Circular_Linked_List 
 * @param {linkedList = 2} Doubly_Linked_List
 */

const NodeLL = ({ nodes, linkedList }) => {
    return (
        <div className='linked-list-node-container'>
            {/* single linked list */}
            {
                linkedList === 0 &&
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
                                returnImageElement0("next.png", "next-img", "next-node") :
                                returnImageElement0("null.png", "null-img", "null-node")
                            }</div>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}

// returns the next pointer for single linked list
function returnImageElement0(src, className, alt) {
    return <img src={require(`../assets/${src}`)} className={className} alt={alt} />
}

export default NodeLL
