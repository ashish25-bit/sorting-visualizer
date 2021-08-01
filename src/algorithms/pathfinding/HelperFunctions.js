import { COLUMNS, ROWS } from './Fields';

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

export function get2DArray(ROWS, COLUMNS, value = 0) {
    const arr = new Array(ROWS);

    for (let i=0; i < ROWS; i++)
        arr[i] = new Array(COLUMNS).fill(value);

    return arr;
}

export function popUntilFinal(arr, node) {
    while (arr[arr.length - 1] !== node)
        arr.pop();
    return arr;
}

export function isValid(x, y) {
    return x >= 0 && y >= 0 && x < ROWS && y < COLUMNS;
}

export function getNode(grid, row, col) {
    const index = (COLUMNS * row) + (col);
    return grid[index];
}