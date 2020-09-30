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

export const backToNormal = (index, length) => {
    for (let i=index; i<length; i++) 
        changeNodeColor({ index: i, color: "var(--nodeColor)" });
}