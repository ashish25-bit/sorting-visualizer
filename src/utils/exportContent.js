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
        "The smallest element in the subarray a[i+1.....n] is placed at the index i after the completion of inner loop."
    ],
    [
        "This is Insertion Sort",
        "Time complexity: O(N^2)",
        "Space complexity: O(1)",
    ],
    [
        "This is Merge Sort",
        "Time complexity: O(N * log N)",
        "Space complexity: O(N)"
    ],
    [
        "This is Quick Sort.",
        "Time complexity: O(N * log N).",
        "The HIGH index is taken as the pivot element.",
        "The pivot element is put at its correct sorted position in the end of partition function."
    ],
    [
        "This is Shell Sort",
        "Time complexity: O(N^2)",
    ]
];

export const codes = [`
    void bubbleSortAlgo(int arr[], int n) {
        for (int i=0; i<n-1; i++) {
            for (int j = 0; j<n-i-1; j++) 
                if (arr[j] > arr[j+1])
                    swap(&arr[j], &arr[j+1]);
        }
    }`, `
    void selectionSortAlgo(int arr[], int n) {
        for (int i=0; i<n-1; i++) {  
            int min_idx = i;  
            for (int j = i+1; j < n; j++)  
                if (arr[j] < arr[min_idx])  
                    min_idx = j;  
            swap(&arr[min_idx], &arr[i]);  
        }  
    }`, `
    void insertionSortAlgo(int arr[], int n) {
        for (int i=1; i<n; i++) {  
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }`, `

    void mergeArray(int a[], int start, int mid, int end) {
        vector<int> mergeArray;
        int k=0;
        int p = start;
        int q = mid + 1;

        for (int i=start; i<=end; i++, k++) {
            if (p < mid)
                mergeArray.push_back(a[q++]);
            else if (q > end) 
                mergedArray.push_back(a[p++]);
            else if (a[p] < a[q]) 
                mergedArray.push_back(a[p++]);
            else 
                mergedArray.push_back(a[q++]); 
        }

        for (int i=0; i<k; i++) {
            a[start++] = mergeArray[i];
        }
    }

    void mergeSortAlgo(int arr[], int start, int end) {
        if (start < end) {
            int mid = start + (end-start)/2;
            mergeSortAlgo(a, start, mid);
            mergeSortAlgo(a, mid+1, end);

            mergeArray(a, start, mid, end);
        }
    }`, `
    int partition(int arr[], int low, int high) {
        int pivot = a[high];
        int i = low-1;

        for (j = low; j <= high - 1; j++) {
            if (a[j] < pivot) }{
                i++;
                swap(&a[i], &a[j]);
            }
        }
        swap(&a[i+1], &a[high]);
        return (i+1);
    }

    void quickSortAlgo(int arr[], int low, int high) {
        if (low < high) {
            int p = partition(a, low, high);

            quickSortAlgo(a, low, p-1);
            quickSortAlgo(a, p+1, high);
        }
    }`, `
    void shellSortAlgo(int arr[], int n) {
        for (int gap = n/2; gap > 0; gap = gap /2) {
            for (int i = gap; i<n; i++) {
                int temp = a[i];
                int j;
                for (j=i; j >= gap && a[j-gap] > temp; j = j - gap)
                    a[j] = a[j-gap];
                a[j] = temp;
            }
        }
    }`
];