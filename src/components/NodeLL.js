import React, { Fragment } from 'react'

const NodeLL = ({ nodes, returnImageElement, linkedList }) => {
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
                                returnImageElement("next.png", "next-img", "next-node") :
                                returnImageElement("null.png", "null-img", "null-node")
                            }</div>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}

export default NodeLL
