import { changeNodeColor } from './HelperFuntion'

export const TraverseSLL = index => {
    try {
        for (let i=0; i<=index; i++) {
            if (i === index)
                changeNodeColor({ index, color: "var(--currentNode)" });
            else 
                changeNodeColor({ index: i, color: "var(--visitedNode)" });
        }
    } 
    catch (err) {
        return
    }
}

/**
 * 
 * @param {number} index : index of the currentNode
 * @param {number} status : 0(default) -> forward traveral; 1->reverse traversal;
 */
export const reverseTraversalSLL = (index, status=0) => {
    try {
        switch (status) {
            case 0: 
                for (let i=0; i<=index; i++) {
                    if (i===index)
                        changeNodeColor({ index, color: "var(--currentNode)" });
                    else 
                        changeNodeColor({ index: i, color: "var(--pendingNode)" });
                }
                break;        
            case 1: 
                changeNodeColor({ index, color: "var(--visitedNode)" });
                break;
            default: 
                break;
        }
    } 
    catch (err) {
        return;
    }
}

export const backToNormal = (index, length, color="var(--nodeColor)") => {
    for (let i=index; i<length; i++) 
        changeNodeColor({ index: i, color });
}