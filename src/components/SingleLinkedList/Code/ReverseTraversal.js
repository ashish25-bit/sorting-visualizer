import React, { useEffect } from 'react';
import { codeContainer, marginParam } from '../../../utils/exportStyles';
import keywords from '../../../utils/keywords';
import { currentPNodes } from '../../../algorithms/linkedlist/HelperFuntion';

const ReverseTraversal = ({ current: { nodes, currentNode, arrayIndex }}) => {
    const currentValue = currentNode < nodes.length ? nodes[currentNode].data : "null";

    useEffect(() => {
        // removing the classes from the code nodes 
        currentPNodes(null);

        let targetNodes = [];
        if (arrayIndex >= 0 && arrayIndex < nodes.length)
            targetNodes = [4];
        else if (arrayIndex === nodes.length)
            targetNodes = [2, 3];
        else 
            targetNodes = [4, 5];
        currentPNodes(targetNodes);
    }, [arrayIndex, nodes]);

    return (
        <div style={codeContainer}>
            <code>
                <p>
                    {getSpan("function")} {getSpan("reverseTraversal")} ({getSpan("root")}) {'{'}
                </p>
                {
                    arrayIndex <= nodes.length &&
                    <p style={marginParam(1)}>{getComment(`// root is ${currentValue} now`)}</p>
                }
                <p style={marginParam(1)}>
                    {getSpan("if")} ({getSpan("head")} === {getSpan("null")}) 
                </p>
                <p style={marginParam(2)}>{getSpan("return")};</p>
                <p style={marginParam(1)}>
                    {getSpan("reverseTraversal")}({getSpan("root")}.{getSpan("next")});
                </p>
                <p style={marginParam(1)}>
                    {getSpan("console")}.{getSpan("log")}({getSpan("root")}.{getSpan("data")});
                </p>
                {
                    arrayIndex > nodes.length &&
                    <p style={marginParam(1)}>{getComment(`// ${currentValue} gets print`)}</p>
                }
                <p>{'}'}</p>
            </code>
        </div>
    )
}

export default ReverseTraversal

function getSpan(property) {
    let attr = keywords[property] ? keywords[property] : "variable" 
    return <span attr={attr}>{property}</span>;
}

function getComment(comment) {
    return <span attr="comment">{comment}</span>
}
