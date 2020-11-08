import { getAllNodes, sortNodesByDistance, changeColorNode } from './HelperFunctions';
const COLUMNS = 50;
const ROWS = 16;

export const dijkstra = (grid, startNode, finishNode) => {

    const visitedNodesInOrder = [];
    startNode.distance = 0;

    const unvisitedNodes = getAllNodes(grid);
    
    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);

        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall)
            continue;

        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) 
            break;
            // return visitedNodesInOrder;
        
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        
        if (closestNode === finishNode)
            break;
            // return visitedNodesInOrder;
        
        updateUnvisitedNeighbors(closestNode, grid);
    }

    // get the nodes of the shortest path
    const shortestPathNodes = getNodesInShortestPathOrder(finishNode);
    return changeColorNode(visitedNodesInOrder, shortestPathNodes);  
}

function updateUnvisitedNeighbors (node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}
  
function getUnvisitedNeighbors (node, grid) {
    const neighbors = [];
    const { index } = node;
    
    const mod = index % COLUMNS;
    const div = index / COLUMNS;

    if (mod !== 0) 
        neighbors.push(grid[index - 1]);
    
    if (mod !== COLUMNS - 1)
        neighbors.push(grid[index + 1]);
    
    if (div < ROWS - 1)
        neighbors.push(grid[index + 50]);

    if (div >= 1)
        neighbors.push(grid[index - 50]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getNodesInShortestPathOrder (finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;

    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
}