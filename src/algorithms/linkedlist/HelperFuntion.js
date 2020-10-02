export const changeNodeColor = ({ index, color }) => {
    try {
        const nodes = document.querySelectorAll('.linked-list-node');
        nodes[index].style.background = color
    } 
    catch (err) {
        console.log(index)
        console.log(err.message);    
    }
}