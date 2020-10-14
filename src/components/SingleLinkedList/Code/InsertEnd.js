import React, { useEffect } from 'react';
import { codeContainer, marginParam } from '../../../utils/exportStyles';
import keywords from '../../../utils/keywords';
import { currentPNodes } from '../../../algorithms/linkedlist/HelperFuntion';

const InsertEnd = ({ currentNode, length, currentStep }) => {
    // length - currentStep === 1

    useEffect(() => {
        currentPNodes(null);
        let targetNodes = [];
        switch (currentStep) {
            case 0:
                targetNodes = [2, 3, 4, 5];
                break;
            case length:
                targetNodes = [8];
                break;
            case length - 1:
                targetNodes = [7];
                break;
            default: 
                targetNodes = [4, 5];
                break;
        }
        currentPNodes(targetNodes);
    }, [currentStep, length])

    return (
        <div style={codeContainer}>
            <code>
                <p>
                    {getSpan("function")} {getSpan("insertBegin")}{' '}
                    ({getSpan("root")}, {getSpan("val")}) {'{'}
                </p>
                <p style={marginParam(1)}>{getComment(`// class Node {...}`)}</p>
                <p style={marginParam(1)}>
                    {getSpan("const")} {getSpan("newnode")} = {' '}
                    {getSpan("new")} {getSpan("Node")}({getSpan("val")});
                </p>
                <p style={marginParam(1)}>
                    {getSpan("let")} {getSpan("tempNode")} = {getSpan("root")};
                </p>
                <p style={marginParam(1)}>
                    {getSpan("while")} ({getSpan("tempNode")}.{getSpan("next")} !== {getSpan("null")})
                </p>
                <p style={marginParam(2)}>
                    {getSpan("tempNode")} = {getSpan("tempNode")}.{getSpan("next")};
                </p>
                <p style={marginParam(1)}>{getComment(`// tempNode is at ${currentNode}`)}</p>
                <p style={marginParam(1)}>
                    {getSpan("tempNode")}.{getSpan("next")} = {getSpan("newNode")};
                </p>
                <p style={marginParam(1)}>
                    {getSpan("return")} {getSpan("root")};
                </p>
                <p>{'}'}</p>
            </code>
        </div>
    )
};

export default InsertEnd;

function getSpan(property) {
    let attr = keywords[property] ? keywords[property] : "variable" 
    return <span attr={attr}>{property}</span>;
}

function getComment(comment) {
    return <span attr="comment">{comment}</span>
}
