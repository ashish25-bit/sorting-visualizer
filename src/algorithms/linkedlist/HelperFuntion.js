import { speed } from '../../utils/exportStyles';

export const currentPNodes = async (targetNodes) => {
    const nodes = document.querySelectorAll('code p');

    try {
        // classes are removed here
        if (targetNodes === null) {
            for (const node of nodes) 
                node.classList.remove('active')
            return;
        }

        // classes are added here
        for (const index of targetNodes) {
            await new Promise(resolve =>
                window.setTimeout (() =>
                    resolve(nodes[index].classList.add('active'))
                , speed)
            )
        }
    } 
    catch (err) {
        return ;
    }
}

export const changeNodeColor = ({ index, color }) => {
    try {
        const nodes = document.querySelectorAll('.linked-list-node');
        nodes[index].style.background = color
    } 
    catch (err) {
        return ;
    }
}

export const getNewNodeElement = newNode => {
    const div = document.createElement('div');
    div.title = "New Node";
    div.innerHTML = `<div class="data">${newNode}</div>`;
    div.classList.add('linked-list-node');
    div.classList.add('newnode');
    return div;
}

export const getImgElement = (src, alt, className) => {
    const img = document.createElement('img');
    img.src = require(`../../assets/${src}`);
    img.classList.add(className);
    img.alt = alt;
    return img;
}