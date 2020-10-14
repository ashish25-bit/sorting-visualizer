import { getNewNodeElement, changeNodeColor, getImgElement } from './HelperFuntion';

export const insertBeginSLL = newNode => {
    const parent = document.querySelector('.linked-list-node-container');
    const div = getNewNodeElement(newNode);
    parent.prepend(div);
    changeNodeColor({ index: 1, color: "var(--headNode)" });
}

export const insertEndSLL = newNode => {
    const parent = document.querySelector('.linked-list-node-container');
    const div = getNewNodeElement(newNode);
    parent.append(div);
    changeNodeColor({ index: 0, color: "var(--headNode)" });
}

/**
 *  @param {type} number -> refers to the type of insertion
 * 0 -> begin, 1 -> end, 2 -> at any position 
 * @param {current} number -> the current step algo which is being executed
 */
export const backToNormal = ({ type, ...rest }) => {
    const parent = document.querySelector('.linked-list-node-container');
    switch (type) {
        case 0:
            const firstElement = parent.childNodes[0];
            const secondElement = parent.childNodes[1];
            const len = firstElement.childNodes.length;
            if (len > 1) {
                firstElement.removeChild(firstElement.childNodes[len-1]);
                firstElement.title = "New Node";
            }
            if (rest.current <2) {
                changeNodeColor({ index: 1, color: "var(--headNode)" });
                secondElement.title = "Head";
            }
            break;
        case 1: 
            const lastElement = parent.childNodes[rest.length];
            const secondLastElement = parent.childNodes[rest.length-1];
            for (let i=rest.current+1; i<rest.length; i++)
                changeNodeColor({ index: i, color: "var(--nodeColor)" });
            if (rest.current === rest.length-1) {
                lastElement.removeChild(lastElement.childNodes[1]);
                lastElement.title = "New Node";
                secondLastElement.title = "Tail Node";
            }
            break;
        case 2: 
            break;
        default:
            return;
    }
}

export const InsertBeginController = step => {
    const parent = document.querySelector('.linked-list-node-container');
    const firstElement = parent.childNodes[0];
    switch (step) {
        case 1:
            if (firstElement.childNodes.length === 1) {
                const img = getImgElement("next.png", "next node pointer", "next-img");
                firstElement.appendChild(img);
            }
            break;
        case 2: 
            if (firstElement.childNodes.length === 1) {
                const img = getImgElement("next.png", "next node pointer", "next-img");
                firstElement.appendChild(img);
            }
            changeNodeColor({ index: 1, color: "var(--nodeColor)" });
            parent.childNodes[1].title = "";
            firstElement.title = "New Head Node";
            break;
        default:
            return;
    }
}

export const InsertEndController = (step, length) => {
    const parent = document.querySelector('.linked-list-node-container');
    const secondlastElement = parent.childNodes[length-2];
    const lastElement = parent.childNodes[length-1];

    if (step <= length - 2) {
        for (let i=1; i<=step; i++)
            if (i === step)
                changeNodeColor({ index: step, color: "var(--currentNode)" });
            else 
                changeNodeColor({ index: i, color: "var(--nodeColor)" });
    }

    else if (step === length-1) {
        if (lastElement.childNodes.length === 1) {
            const img = getImgElement("next.png", "next node pointer", "next-img-f");
            lastElement.appendChild(img);
        }
        secondlastElement.title = "";
        lastElement.title = "New Node Tail Node";
    }
}