import url from './url';

export const home = [
    {
        url: url.sort,
        name: "Sorting",
        src: require('../assets/mergeSort.gif'),
        alt: "Sort-img"
    },
    {
        url: url.sLLTraversing,
        name: "Single Linked List Traversal",
        src: require('../assets/linkedList.gif'),
        alt: "linked-list-img"
    },
    {
        url: url.sLLInsertion,
        name: "Single Linked List Insertion",
        src: require('../assets/insert-begin.gif'),
        alt: "linked-list-img"
    },
    {
        url: url.pathFinding,
        name: "Path Finding Algorithm",
        src: require('../assets/path.gif'),
        alt: "path-finding-image"
    }
];

export const colors = {
    pathFinding: [
        {
            name: "Start Node",
            color: "var(--startNode)"
        },
        {
            name: "End Node",
            color: "var(--destNode)"
        },
        {
            name: "Nodes Path",
            color: "var(--shortestPath)"
        },
        {
            name: "Wall",
            color: "var(--wallNode)"
        },
        {
            name: "Visited Nodes",
            color: "var(--visitedGraphNode)"
        },
        {
            name: "Nodes",
            color: "var(--normalNode)"
        }
    ],
    linkedList: [
        {
            name: "Current Node",
            color: "var(--currentNode)"
        },
        {
            name: "Normal Node",
            color: "var(--nodeColor)"
        },
        {
            name: "Visited Node",
            color: "var(--visitedNode)"
        },
        {
            name: "Pedning Node",
            color: "var(--pendingNode)"
        },
        {
            name: "head Node",
            color: "var(--headNode)"
        },
        {
            name: "New Node",
            color: "var(--newnode)"
        }
    ]
};

export const arrayNotes = [
    [
        "This sorting technique uses two for loops(nested).",
        "Time complexity: O(N^2)",
        "Space complexity: O(1)",
        "The largest element is put in it's sorted position in each iteration."
    ],
    [
        "This is Selection Sort",
        "Time complexity: O(N^2)",
        "Space complexity: O(1)",
    ],
    [
        "This is Insertion Sort",
        "Time complexity: O(N^2)",
        "Space complexity: O(1)",
    ],
    [
        "This is Merge Sort",
        "Time complexity: O(N * log N)",
    ],
    [
        "This is Quick Sort",
        "Time complexity: O(N * log N)",
    ],
    [
        "This is Heap Sort",
        "Time complexity: O(N^2)",
    ],
    [
        "This is Shell Sort",
        "Time complexity: O(N^2)",
    ]
];