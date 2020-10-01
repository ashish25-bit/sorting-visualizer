import React from 'react';
import { codeContainer, marginParam } from '../../../utils/exportStyles';
import keywords from '../../../utils/keywords';

const ReverseTraversal = ({ current: { nodes, currentNode }}) => {
    const currentValue = currentNode < nodes.length ? nodes[currentNode].data : "null";
    return (
        <div style={codeContainer}>
            <code>
                <p>
                    {getSpan("function")} {getSpan("reverseTraversal")} ({getSpan("root")}) {'{'}
                </p>
                <p style={marginParam(1)}>{getComment(`// root is ${currentValue} now`)}</p>
                <p style={marginParam(1)}>
                    {getSpan("if")} ({getSpan("head")} === {getSpan("null")}) 
                </p>
                <p style={marginParam(2)}>{getSpan("return")};</p>
                <p style={marginParam(1)}>
                    {getSpan("reverseTraversal")}({getSpan("root")}.{getSpan("next")});
                </p>
                <p style={marginParam(1)}>
                    {getSpan("console")}.{getSpan("log")}({getSpan("root")}.{getSpan("next")});
                </p>
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