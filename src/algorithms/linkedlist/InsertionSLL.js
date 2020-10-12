import { getNewNodeElement, changeNodeColor, getImgElement } from './HelperFuntion';

export const insertBeginSLL = newNode => {
    const parent = document.querySelector('.linked-list-node-container');
    const div = getNewNodeElement(newNode);
    parent.prepend(div);
    changeNodeColor({ index: 1, color: "var(--headNode)" });
}

/**
 *  @param {type} number -> refers to the type of insertion
 * 0 -> begin, 1 -> end, 2 -> at any position 
 * @param {current} number -> the current step algo which is being executed
 */
export const backToNormal = (type, current) => {
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
            if (current <2) {
                changeNodeColor({ index: 1, color: "var(--headNode)" });
                secondElement.title = "Head";
            }
            break;
        case 1: 
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
                const img = getImgElement("next2.png", "next node pointer", "next-img");
                firstElement.appendChild(img);
            }
            break;
        case 2: 
            if (firstElement.childNodes.length === 1) {
                const img = getImgElement("next2.png", "next node pointer", "next-img");
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