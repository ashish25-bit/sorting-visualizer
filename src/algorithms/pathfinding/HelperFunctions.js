export const getAllNodes = grid => {
    const nodes = [];

    for (const node of grid)
        nodes.push(node);    

    return nodes;
}

export const sortNodesByDistance = unvisitedNodes => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

export const changeColorNode = (visitedNodes, shortestPathNodes) => {
    let delay = 0;
    const allNodes = document.querySelectorAll('.path-finding-nodes-container .node');

    for (let i = 0; i <= visitedNodes.length; i++) {
        delay += 50;

        if (i === visitedNodes.length) {
            setTimeout(() => {
                animateShortestPath(shortestPathNodes);
            }, delay + 10);
            
            break;
        }

        if (i !== 0  && i !== visitedNodes.length - 1)
            setTimeout(() => {
                const node = allNodes[visitedNodes[i].index];
                node.classList.add('visited-node');
            }, 50 * i);
    }

    shortestPathNodes.map(_ => delay + 50);
    return delay;
}

function animateShortestPath (shortestPathNodes) {
    const allNodes = document.querySelectorAll('.path-finding-nodes-container .node');

    for (let i = 1; i < shortestPathNodes.length - 1; i++) {
        setTimeout(() => {
            const node = allNodes[shortestPathNodes[i].index];
            node.classList.add('node-shortest-path');
        }, 50 * i);
    }
}

export const removeVisitedNodes = () => {
    const allNodes = document.querySelectorAll('.path-finding-nodes-container .node');
    
    for (const node of allNodes) {
        node.classList.remove('node-shortest-path');
        node.classList.remove('visited-node');
    }
}