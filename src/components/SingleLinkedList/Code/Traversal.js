import React, { useEffect } from 'react';
import {
    codeContainer,
    comment,
    marginParam,
    func,
    variable,
    ret,
    keywords
} from '../../../utils/exportStyles';

const Traversal = ({ current: { nodes, currentNode } }) => {
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
                <p>{getSpan("function",keywords)} {getSpan("traversal",func)}(root) {`{`}</p>
                
                <p style={{
                    ...marginParam(1),
                    ...comment
                }}>{`// root is ${nodes[0].data} here`}</p>

                <p style={marginParam(1)}>{getSpan("let",keywords)} {getSpan("tempRoot",variable)} = root;</p>
                
                <p style={marginParam(1)}>
                    {getSpan("while",keywords)} 
                    ({getSpan("tempNode",variable)} !== 
                    {getSpan("null", func)})
                </p> 
                
                <p style={marginParam(2)}>{getSpan("tempNode",variable)} = {getSpan("tempNode",variable)}.next;</p>
                
                <p style={{
                    ...marginParam(1),
                    ...comment
                }}>{`// tempNode is ${currentValue}.`}</p>
                
                <p style={marginParam(1)}>{getSpan("return;", ret)}</p>
                <p>{'}'}</p>
            </code>
        </div>
    )
};

export default Traversal;

function getSpan(text,  style) {
    return <span style={style}>{text}</span>
}

async function currentPNodes(targetNodes) {
    const nodes = document.querySelectorAll('code p');

    // classes are removed here
    if (targetNodes === null) {
        for (const node of nodes) 
            node.classList.remove('active')
        return;
    }

    // classes are added here
    for (const index of targetNodes) {
        await new Promise(resolve => 
            setTimeout (() =>
                resolve(nodes[index].classList.add('active'))
            , 150)
        )
    }
}
