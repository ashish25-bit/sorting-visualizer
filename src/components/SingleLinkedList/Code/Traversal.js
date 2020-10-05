import React, { useEffect } from 'react';
import { codeContainer, marginParam } from '../../../utils/exportStyles';
import keywords from '../../../utils/keywords';
import { currentPNodes } from '../../../algorithms/linkedlist/HelperFuntion';

const Traversal = ({ current: { nodes, currentNode }}) => {
    const currentValue = currentNode < nodes.length ? nodes[currentNode].data : "null";

    useEffect(() => {
        // removing the classes from the code nodes 
        currentPNodes(null);

        let targetNodes = []
        if (currentNode === 0)
            targetNodes = [2, 3, 4];
        else if (currentNode < nodes.length)
            targetNodes = [3, 4];
        else 
            targetNodes = [6];
        currentPNodes(targetNodes);
    }, [currentNode, nodes])

    return (
        <div style={codeContainer}>
            <code>
                <p>
                    {getSpan("function")} {getSpan("traversal")}{getSpan("(root)")} {'{'}
                </p>
                <p style={marginParam(1)}>{getComment(`// root is ${nodes[0].data} here`)}</p>
                <p style={marginParam(1)}>
                    {getSpan("let")} {getSpan("temp")} = {getSpan("root")};
                </p>
                <p style={marginParam(1)}>
                    {getSpan("while")} ({getSpan("tempNode")} !== {getSpan("null")})
                </p>
                <p style={marginParam(2)}>
                    {getSpan("tempNode")} = {getSpan("tempNode")}.{getSpan("next")};
                </p>
                <p style={marginParam(1)}>{getComment(`// tempNode is at ${currentValue}`)}</p>
                <p style={marginParam(1)}>{getSpan("return")};</p>
                <p>{'}'}</p>
            </code>
        </div>
    )
};

export default Traversal;

function getSpan(property) {
    let attr = keywords[property] ? keywords[property] : "variable" 
    return <span attr={attr}>{property}</span>;
}

function getComment(comment) {
    return <span attr="comment">{comment}</span>
}
