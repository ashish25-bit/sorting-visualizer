export const changeNodeColor = ({ index, color }) => {
    const nodes = document.querySelectorAll('.linked-list-node');
    nodes[index].style.background = color
}