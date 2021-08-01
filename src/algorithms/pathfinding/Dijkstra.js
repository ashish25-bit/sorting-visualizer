import { changeColorNode, get2DArray, popUntilFinal, isValid, getNode } from './HelperFunctions';
import { Point } from './Point';
import { Heap } from './Heap';
import { COLUMNS, ROWS, dx, dy } from './Fields';

function getNodesInShortestPathOrder (finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;

    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
}

export const dijkstra = (grid, startNode, finishNode) => {
    const [finalNode, visitedNodesInOrder] = dijkstraAlgo(grid, startNode, finishNode);

    if (finalNode === null)
        return [1000, false];
    const shortestPathNodes = getNodesInShortestPathOrder(finishNode);

    return [changeColorNode(visitedNodesInOrder, shortestPathNodes), true];
}

function dijkstraAlgo(grid, startNode, finishNode) {
    const start   = new Point(startNode, 0);
    const end     = new Point(finishNode);
    const visited = get2DArray(ROWS, COLUMNS, false);

    let visitedNodesInOrder = [];
    visitedNodesInOrder.push(startNode);

    visited[start.x][start.y] = true;
    const heap = new Heap();
    heap.insert(start);

    while (!heap.empty()) {
        const curr = heap.top();

        if (curr.x === end.x && curr.y === end.y) {
            visitedNodesInOrder = popUntilFinal(visitedNodesInOrder, finishNode);
            return [curr.node, visitedNodesInOrder];
        }
        heap.remove();

        if (curr.dist === Infinity) break;

        for (let i=0; i < 4; i++) {
            const nextX = curr.x + dx[i];
            const nextY = curr.y + dy[i];

            if (isValid(nextX, nextY) && visited[nextX][nextY] === false) {
                const node = getNode(grid, nextX, nextY);
                if (!node.isWall) {
                    node.previousNode = curr.node;

                    visitedNodesInOrder.push(node);

                    visited[nextX][nextY] = true;
                    const point = new Point(node, curr.dist + 1);
                    heap.insert(point);
                }
            }
        }
    }

    return [null, visitedNodesInOrder];
}