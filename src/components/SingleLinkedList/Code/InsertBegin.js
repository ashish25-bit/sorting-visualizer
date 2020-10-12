import React, { useEffect } from 'react';
import { codeContainer, marginParam } from '../../../utils/exportStyles';
import keywords from '../../../utils/keywords';
import { currentPNodes } from '../../../algorithms/linkedlist/HelperFuntion';

function InsertBegin({ currentStep, length, firstNode, newNode }) {

    useEffect(() => {
        currentPNodes(null);
        let targetNodes = [];
        switch (currentStep) {
            case 0:
                targetNodes=[2];
                break;
            case 1:
            case 2:
                targetNodes=[4];
                break;
            case 3:
                targetNodes=[6];
                break;
            default:
                break;
        }
        currentPNodes(targetNodes);
    }, [currentStep])

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
                {
                    currentStep < length-1 &&
                    <p style={marginParam(1)}>{getComment(`// root is ${firstNode} now`)}</p>
                }
                <p style={marginParam(1)}>
                    {getSpan("newnode")}.{getSpan("next")} = {getSpan("root")};
                </p>
                <p style={marginParam(1)}>
                    {getSpan("root")} = {getSpan("newnode")};
                </p>
                {
                    currentStep >= length-1 &&
                    <p style={marginParam(1)}>{getComment(`// root is ${newNode} now`)}</p>
                }
                <p style={marginParam(1)}>
                    {getSpan("return")} {getSpan("root")};
                </p>
                <p>{'}'}</p>
            </code>
        </div>
    )
}

export default InsertBegin

function getSpan(property) {
    let attr = keywords[property] ? keywords[property] : "variable" 
    return <span attr={attr}>{property}</span>;
}

function getComment(comment) {
    return <span attr="comment">{comment}</span>
}
